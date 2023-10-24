import {InputLabel} from "@mui/material";

// interface Props {
//     children: ReactNode
// }
export const FormItem = ({ children }) => {
    return (
        <InputLabel>
            {children}
        </InputLabel>
    );
};