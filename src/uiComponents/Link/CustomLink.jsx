import React from 'react';
import {Link} from "@mui/joy";
import {Typography} from "@mui/material";
import {TYPOGRAPHY_MATERIAL_UI_VARIANTS} from "../../consts/variantConsts";

export const CustomLink = ({ url, children}) => {
    return (
        <Link
            href={`/vozilka-ui${url}`}
            underline="hover"
        >
            <Typography variant={TYPOGRAPHY_MATERIAL_UI_VARIANTS.h6}>
                {children}
            </Typography>
        </Link>
    );
};
