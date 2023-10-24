import {Box, Stack} from "@mui/joy";
import {DriveItem} from "./DriveItem";

// interface IProps {
//     list: TDrives;
//     handleConfirmDrive: (params: IConfirmDriRequestDTO) => void;
// }
export const DrivesList = ({list, handleConfirmDrive}) => {
    return (
        <div>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{minWidth: 600}}
            >
                <Stack spacing={8} sx={{maxWidth: 800, flexGrow: 1, p: 10}}>

                    {
                        list.map((_) => (
                            <DriveItem
                                {..._} key={_.id}
                                handleConfirmDrive={handleConfirmDrive}
                            />
                        ))

                    }
                </Stack>
            </Box>
        </div>
    );
};