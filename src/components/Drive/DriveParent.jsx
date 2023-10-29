import {useEffect, useRef, useState} from 'react';
import {useAuthContext} from "../../context/auth/useAuthContext";
import {convertToUtcString} from "../../utils/dateUtils.js";
import {
    confirmDrive,
    createDrive, getFilteredDrives,
    retrieveDriveRealTime
} from "../../api/drive.js";
import Button from "@mui/material/Button";
import {BUTTON_MATERIAL_UI_VARIANTS} from "../../consts/variantConsts.js";
import {DrivesList} from "./DrivesList.jsx";
import {DriveForm} from "./DriveForm";
import {AuthHeader} from "../Auth/AuthHeader/AuthHeader";


export const DriveParent = () => {
    const {id, role} = useAuthContext();
    const isSubscribed = useRef(false)
    const [drives, setDrives] = useState([]);
    const isDriverRole = role === 'Водитель';
    const [mainForm, setMainForm] = useState({
        car_name: [],
        destination: '',
        notes: '',
        source: '',
    })
    const [dates, setDates] = useState({
        arrival_time: '',
        departure_time: ''
    })

    const body = {
        ...mainForm,
        ...dates,
        driver_user_id: id
    }


    useEffect(() => {
    }, [isSubscribed])

    const submitButtonText = isDriverRole
        ? 'Опубликовать поездку'
        : 'Получить все подходящие поездки';
    const headerText = isDriverRole
        ? 'Заполните информацию о вашей поездке'
        : 'Выберите параметры для подписки';

    const handleChangeForm = (event) => {
        const value = event.target.value
        setMainForm((prevForm) => ({
            ...prevForm, [event.target.name]:
                    value
        }));
    }

    const handleChangeCalendar = (name, date) => {
        setDates((prevDates) => ({...prevDates, [name]: convertToUtcString(date)}))
    }

    const handleCreateDrive = async () => {
        if (!id) return
        console.log('body:', body);

        try {
            await createDrive(body)
        } catch (e) {
            console.error(e)
        }
    }

    const handleConfirmDrive = async (params) => {
        try {
            isSubscribed.current = false
            const {data} = await confirmDrive(params)

            if (data === 'confirmed') alert('Вы успешно подтвердили поездку')
        } catch (e) {
            console.error(e)
        }
    }

    const filterUniqueValues = (array) => {
        const result = []
        array.forEach((drive) => {
            !result.find(drive.id) && result.push(drive)
        })
        return result
    }

    const handleSubscribe = async () => {
        if (!isSubscribed.current) return

        const bodyToRequest = {
            ...body,
            car_names: body.car_name
        }
        delete bodyToRequest.driver_user_id
        delete bodyToRequest.notes
        delete bodyToRequest.name

        try {

            const response = await retrieveDriveRealTime(bodyToRequest)
            if (!!response.error) throw new Error()


            setDrives((prevDrive) => filterUniqueValues([...prevDrive, ...response.data]))

            if (isSubscribed.current) await handleSubscribe()
        } catch (e) {
            if (isSubscribed.current) await handleSubscribe()
        }
    }

    const handleSuitableDrives = async () => {
        const bodyToRequest = {
            ...body,
            car_names: body.car_name
        }
        delete bodyToRequest.driver_user_id
        delete bodyToRequest.notes
        delete bodyToRequest.name
        try {
            const {data} = await getFilteredDrives(bodyToRequest)
            setDrives(filterUniqueValues(data))

            if (!isSubscribed.current) isSubscribed.current = true
            await handleSubscribe()

        } catch (e) {
        }
    }


    const handleSubmit = async () => {
        if (isDriverRole) return await handleCreateDrive()
        await handleSuitableDrives()
    }


    return (
        <div>

            <AuthHeader label={headerText}/>
            <DriveForm
                mainForm={mainForm}
                dates={dates}
                handleChangeCalendar={handleChangeCalendar}
                handleChangeForm={handleChangeForm}
                isDriver={isDriverRole}
            >
                <Button
                    onClick={handleSubmit}
                    variant={BUTTON_MATERIAL_UI_VARIANTS.contained}
                >
                    {submitButtonText}
                </Button>
            </DriveForm>

            {!isDriverRole && <DrivesList handleConfirmDrive={handleConfirmDrive} list={drives}/>}
        </div>
    );
};