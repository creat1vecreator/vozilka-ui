import {Typography} from "@mui/material";
import {TYPOGRAPHY_MATERIAL_UI_ALIGNS, TYPOGRAPHY_MATERIAL_UI_VARIANTS} from "../../../consts/variantConsts.js";

export const AuthHeader = ({ label }) => {
    return (
        <>
            <Typography
                variant={TYPOGRAPHY_MATERIAL_UI_VARIANTS.h3}
                align={TYPOGRAPHY_MATERIAL_UI_ALIGNS.center}>
                {label}
            </Typography>
        </>
    );
};
