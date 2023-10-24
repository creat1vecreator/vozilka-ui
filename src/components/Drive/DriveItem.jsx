import {Button, CardContent, Typography} from '@mui/material';
import styles from './drive.module.scss'
import {BUTTON_MATERIAL_UI_VARIANTS} from "../../consts/variantConsts.js";
import {useAuthContext} from "../../context/auth/useAuthContext";
import {mainDateFormatter} from "../../utils/dateUtils.js";

// interface IDriveItemProps extends IDrive {
//     handleConfirmDrive: (params: IConfirmDriRequestDTO) => void
// }

export const DriveItem = ({
                              car_name,
                              destination,
                              notes,
                              source,
                              arrival_time,
                              departure_time,
                              id: drive_id,
                              handleConfirmDrive
                          }) => {



    const {id} = useAuthContext()

    const confirmDrive = () => {
        if (!id) return
        handleConfirmDrive({ drive_id , passenger_id: id})
    }
    return (
        <CardContent sx={{outline: '2px solid blue'}}>
            {arrival_time && (<>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Время отправления
                </Typography>
                <Typography variant="h5" component="div">
                    {arrival_time}
                </Typography>
            </>)
            }
            {
                departure_time && (<>

                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Выберите дату отправления:
                    </Typography>
                    <Typography variant="h5" component="div">
                        {mainDateFormatter(departure_time)}
                    </Typography>
                </>)
            }
            {
                source && (<>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Поездка начнётся от:
                    </Typography>
                    <Typography variant="h5" component="div">
                        {source}
                    </Typography>
                </>)
            }
            {
                departure_time && (<>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Дата окончания поездки
                    </Typography>
                    <Typography variant="h5" component="div">
                        {mainDateFormatter(departure_time)}
                    </Typography>
                </>)
            }
            {
                destination && (<>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Поездка закончится
                    </Typography>
                    <Typography variant="h5" component="div">
                        {destination}
                    </Typography>

                </>)
            }
            {
                car_name && (<>

                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Марка машины
                    </Typography>
                    <Typography variant="h5" component="div">
                        {car_name}
                    </Typography>

                </>)
            }
            {
                notes && (<>
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Комментарии
                    </Typography>
                    <Typography variant="h5" component="div">
                        {notes}
                    </Typography>
                </>)
            }

            <div className={styles.buttonConfirm}>
                <Button variant={BUTTON_MATERIAL_UI_VARIANTS.contained}
                        onClick={confirmDrive}>
                    Подтвердить поездку
                </Button>
            </div>
        </CardContent>
    );
};
