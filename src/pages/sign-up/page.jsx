import {SignUpForm} from './components/SignUpForm'
import {AuthHeader} from "../../components/Auth/AuthHeader/AuthHeader";

export const SignUp = () => {

    return (
        <>
            <AuthHeader label="Зарегистрируйтесь у нас"/>
            <SignUpForm/>
        </>
    )
}