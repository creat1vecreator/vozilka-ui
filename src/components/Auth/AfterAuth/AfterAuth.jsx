import {Typography} from "@mui/material";
import {TYPOGRAPHY_MATERIAL_UI_VARIANTS} from "../../../consts/variantConsts.js";
import {CustomLink} from "../../../uiComponents/Link/index.js";
import styles from './afterAuth.module.scss'
import cn from 'classnames';

const cx = cn.bind(styles)
export const AfterAuth = ({ infoText, linkText, url, isInTheEnd = false }) => {
    return (
        <>
            <div className={cx(styles.afterAuth, { [styles.endPlacement ]: isInTheEnd })}>
                <Typography variant={TYPOGRAPHY_MATERIAL_UI_VARIANTS.h6} marginRight={2}>{infoText} </Typography>

                <CustomLink url={`${url}`}>
                    {linkText}
                </CustomLink>
            </div>
        </>
    );
};
