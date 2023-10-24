import vozilkaUiLogo from '../../assets/img.png'
import styles from './Header.module.scss';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
import {logout} from "../../api/header.js";
import {useAuthContext} from "../../context/auth/useAuthContext.js";
import {AuthHeader} from "../Auth/AuthHeader/AuthHeader.jsx";
import {BUTTON_MATERIAL_UI_VARIANTS} from "../../consts/variantConsts.js";
import {useNavigate} from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate()

    const { isAuth, userEmail } = useAuthContext()

    const handleLogout = async () => {

        try {
            await logout();
            navigate('/')
        } catch (e) {

        }
    }

    return (
        <div className={styles.header__headerWrapper}>
            <img src={vozilkaUiLogo} alt="logo" className={styles.header__logo}/>
            { userEmail && <AuthHeader label={userEmail} />}
            {
                isAuth &&
                (
                    <Button variant={BUTTON_MATERIAL_UI_VARIANTS.text} onClick={handleLogout}>
                        <LogoutIcon sx={{width: 60, height: 100, cursor: "pointer"}}/>
                    </Button>
                )
            }
        </div>
    )
}
