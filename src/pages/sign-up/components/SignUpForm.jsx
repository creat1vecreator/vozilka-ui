import { useState} from 'react';
import {AuthForm} from '../../../components/Auth/AuthForm'
import {AfterAuth} from "../../../components/Auth/AfterAuth/AfterAuth";
import supabase from "../../../api/supabase.js";

export const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')


    const handleEmailChange = (event) => {
        setEmail((event.target).value)
    }

    const handlePasswordChange = (event) => {
        setPassword((event.target).value)
    }

    const handleRoleChange = (event) => {
        setRole((event.target).value)
    }

    const handleSignUp = async () => {
        try {
            const response = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        role
                    },
                },
            })
        }
        catch (e) {
            console.error(e)
        }
    }


    return (
        <>
            <AuthForm
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
                handleRoleChange={handleRoleChange}
                handleButtonClick={handleSignUp}
                role={role}
                buttonLabel="Регистрация"
                isWithChoosingRole
            >
                <AfterAuth
                    infoText="Уже есть аккаунт?"
                    linkText="Войдите в него"
                    url="/sign-in"
                    isInTheEnd
                />

            </AuthForm>

        </>
    );
};