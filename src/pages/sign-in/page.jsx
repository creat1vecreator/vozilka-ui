import {SignInForm} from './components/SignInForm/SignInForm'
import {AuthHeader} from "../../components/Auth/AuthHeader/AuthHeader";

export const SignIn = () => {

    return (
        <>
            <AuthHeader label="Войдите в приложение"/>
            <SignInForm/>
        </>
    )
}