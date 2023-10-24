
import {Stack} from "@mui/joy";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {BUTTON_MATERIAL_UI_VARIANTS} from "../../../consts/variantConsts.js";
import {InputLabel, MenuItem, Select} from "@mui/material";

const ROLE_ITEMS = [
    {
        label: 'Водитель',
        value: 'Водитель',
    },
    {
        label: 'Пассажир',
        value: 'Пассажир',
    }
]
export const AuthForm = ({
                             handleEmailChange,
                             handlePasswordChange,
                             handleRoleChange = (event, child) => {},
                             role,
                             handleButtonClick,
                             buttonLabel,
                             isWithChoosingRole,
                             children
                         }) => {

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{minWidth: 600}}
        >
            <Stack spacing={8} sx={{maxWidth: 800, flexGrow: 1, p: 10}}>
                <Input placeholder="Введите почту" onChange={handleEmailChange}/>
                <Input placeholder="Введите пароль" onChange={handlePasswordChange} type="password"/>

                {
                    isWithChoosingRole &&
                    (<>
                            <Stack spacing={2} sx={{flexGrow: 1, p: 2}}>
                                <InputLabel id="demo-simple-select-standard-label">Выберите вашу роль</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    label="Кто вы?"
                                    onChange={handleRoleChange}
                                    value={role}
                                >
                                    {ROLE_ITEMS.map(({value, label}) => (
                                        <MenuItem value={value} key={value}>{label}</MenuItem>))}
                                </Select>
                            </Stack>
                        </>
                    )
                }


                <Button
                    style={{display: "inline-block"}}
                    variant={BUTTON_MATERIAL_UI_VARIANTS.contained}
                    onClick={handleButtonClick}>
                    {buttonLabel}
                </Button>
                {children}
            </Stack>
        </Box>
    )
}