import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {Box, Stack} from '@mui/joy';
import {FormItem} from "../../uiComponents/FormItem/FormItem.jsx";
import {Select, MenuItem, TextareaAutosize} from "@mui/material";
import Input from "@mui/material/Input";
import {convertToDayjs} from "../../utils/dateUtils.js";
import {CAR_ITEMS} from "./consts";

export const DriveForm = ({
                              mainForm,
                              dates,
                              handleChangeCalendar,
                              handleChangeForm,
                              children,
                              isDriver
                          }) => {

    const chooseCarText = isDriver
        ? 'Выберите марку вашей машины'
        : 'Выберите подходящие марки машин'

    const startChooseDayText = isDriver
        ? 'Выберите дату отправления'
        : 'Выберите самую ранюю дату начала поездки'

    const endChooseDayText = isDriver
        ? 'Выберите дату окончания поездки'
        : 'Выберите самую позднюю дату окончания поездки'

    const sourceChooseText = isDriver
        ? 'Откуда начнётся поездка?'
        : 'Откуда вы хотели бы начать поездку?'

    return (

        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{minWidth: 600}}
        >
            <Stack spacing={8} sx={{maxWidth: 800, flexGrow: 1, p: 10}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={2} sx={{flexGrow: 1, p: 2}}>
                        <FormItem>{startChooseDayText}</FormItem>
                        <DateTimePicker
                            value={convertToDayjs(dates.departure_time)}
                            onChange={(value) => handleChangeCalendar('departure_time', value)}
                        />

                    </Stack>

                    <Stack spacing={2} sx={{flexGrow: 1, p: 2}}>
                        <FormItem>{sourceChooseText}</FormItem>
                        <Input
                            onChange={handleChangeForm}
                            name="source"
                            value={mainForm.source}
                            placeholder="Введите адрес начала поездки"
                        />
                    </Stack>

                    <Stack spacing={2} sx={{flexGrow: 1, p: 2}}>
                        <FormItem>{endChooseDayText}</FormItem>
                        <DateTimePicker
                            value={convertToDayjs(dates.arrival_time)}
                            onChange={(value) => handleChangeCalendar('arrival_time', value)}
                        />

                    </Stack>

                    <Stack spacing={2} sx={{flexGrow: 1, p: 2}}>
                        <FormItem>Где поездка закончится?</FormItem>
                        <Input
                            name="destination"
                            value={mainForm.destination}
                            onChange={handleChangeForm}
                            placeholder="Введите адрес окончания поездки"
                        />
                    </Stack>

                    <Stack spacing={2} sx={{flexGrow: 1, p: 2}}>
                        <FormItem>{chooseCarText}</FormItem>
                        <Select
                            name={"car_name"}
                            value={mainForm.car_name}
                            onChange={handleChangeForm}
                            multiple={!isDriver}
                        >
                            {CAR_ITEMS.map(({value, label}) => (
                                <MenuItem value={value} key={value}>{label}</MenuItem>))}
                        </Select>
                    </Stack>

                    {
                        isDriver &&
                        <Stack spacing={2} sx={{flexGrow: 1, p: 2}}>
                            <FormItem>Комментарии</FormItem>
                            <TextareaAutosize
                                name="notes"
                                onChange={handleChangeForm}
                                minRows={5}
                                style={{resize: 'none'}}
                            />
                        </Stack>
                    }

                    {children}
                </LocalizationProvider>
            </Stack>
        </Box>
    );
};