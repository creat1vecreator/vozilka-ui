import {AuthHeader} from "../../components/Auth/AuthHeader/AuthHeader.jsx";
import {AfterAuth} from "../../components/Auth/AfterAuth/AfterAuth.jsx"
import {Stack} from "@mui/joy";

export const  Main =  () => {
    return <div>
        <Stack spacing={8} sx={{ flexGrow: 1, p: 10, border: '1px dashed grey'}}>
            <AfterAuth
                infoText="Уже есть аккаунт?"
                linkText="Войдите в него"
                url="/sign-in"
            />

            <AfterAuth
                infoText="Нет аккаунта?"
                linkText="Зарегистрируйтесь"
                url="/sign-up"
            />

        </Stack>


    </div>
}
