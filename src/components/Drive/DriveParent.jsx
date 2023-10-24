import {useEffect, useRef, useState} from 'react';
import {useAuthContext} from "../../context/auth/useAuthContext";
import {convertToIsoString} from "../../utils/dateUtils.js";
import {
    confirmDrive,
    createDrive,
    retrieveDriveRealTime
} from "../../api/drive.js";
import Button from "@mui/material/Button";
import {BUTTON_MATERIAL_UI_VARIANTS} from "../../consts/variantConsts.js";
import {DrivesList} from "./DrivesList.jsx";
import {DriveForm} from "./DriveForm";
import {AuthHeader} from "../Auth/AuthHeader/AuthHeader";


export const  DriveParent = () => {
    const {id, role} = useAuthContext();
    const isSubscribed = useRef(false)
    const [drives, setDrive] = useState([]);
    const isDriverRole = role === 'Водитель';
    const [mainForm, setMainForm] = useState({
        car_name: '',
        destination: '',
        notes: '',
        source: '',
    })
    const [dates, setDates] = useState({
        arrival_time: '',
        departure_time: ''
    })

    useEffect(() => {
    }, [isSubscribed])

    const submitButtonText = isDriverRole
        ? 'Опубликовать поездку'
        : 'Подписаться на поездки';
    const headerText = isDriverRole
        ? 'Заполните информацию о вашей поездке'
        : 'Выберите параметры для подписки';

    const handleChangeForm = (event) => {
        setMainForm((prevForm) => ({...prevForm, [event.target.name]: event.target.value}));
    }

    const handleChangeCalendar = (name, date) => {
        setDates((prevDates) => ({...prevDates, [name]: convertToIsoString(date)}))
    }

    const handleCreateDrive = async () => {
        if (!id) return

        const body = {
            ...mainForm,
            ...dates,
            driver_user_id: id
        }

        try {
            await createDrive(body)
        } catch (e) {
            console.error(e)
        }
    }

    const handleConfirmDrive = async (params) => {
        try {
            isSubscribed.current = false
            await confirmDrive(params)
        }
        catch (e) {
            console.error(e)
        }
    }

    const handleSubscribe = async () => {
        try {
            if (!isSubscribed.current) return
            const response = await retrieveDriveRealTime()
            if (!response.ok) throw new Error()

            const newDrives = await response.json()
            setDrive((prevDrive) => [...prevDrive, ...newDrives])

            if(isSubscribed) await handleSubscribe()
        }
        catch (e) {
            if(isSubscribed.current) await handleSubscribe()
        }
    }


    const handleSubmit = async () => {
        if (isDriverRole) return await handleCreateDrive()
        await handleSubscribe()
    }


    return (
        <div>

            <AuthHeader label={headerText}/>
                <DriveForm
                    mainForm={mainForm}
                    dates={dates}
                    handleChangeCalendar={handleChangeCalendar}
                    handleChangeForm={handleChangeForm}
                    isWithNotes={isDriverRole}
                >
                    <Button
                        onClick={() => {
                            isSubscribed.current = true
                            handleSubmit();
                        }}
                        variant={BUTTON_MATERIAL_UI_VARIANTS.contained}
                    >
                        {submitButtonText}
                    </Button>
                </DriveForm>

                { !isDriverRole && <DrivesList handleConfirmDrive={handleConfirmDrive} list={drives}/>}
        </div>
    );
};