import { useState} from 'react';
import { AuthForm } from '../../../../components/Auth/AuthForm/index.js'
import {AfterAuth} from '../../../../components/Auth/AfterAuth/AfterAuth.jsx';
import supabase from "../../../../api/supabase.js";
import Box from "@mui/material/Box";
import {Stack} from "@mui/joy";
import { useNavigate } from "react-router-dom";



export const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSignIn = async () => {
        try {
            const response = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            navigate('/drive')
        }
        catch (e) {
            console.error(e)
        }
    }


    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{minWidth: 600}}
            >
                <Stack spacing={8} sx={{maxWidth: 800, flexGrow: 1, p: 10}}>

            <AuthForm
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleButtonClick={handleSignIn}
                buttonLabel="Войти"
            >
                <AfterAuth
                    infoText="Нет аккаунта?"
                    linkText="Зарегистрируйтесь"
                    url="/sign-up"
                    isInTheEnd
                />
            </AuthForm>
                </Stack>
            </Box>
        </>
    );
};