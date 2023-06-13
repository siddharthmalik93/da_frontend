import Typography from '@mui/material/Typography';

export const UserOperationHeading = ({title}) => {
    return (
        <Typography sx={{ p: 2 }} variant="h6">
            {title}
        </Typography>
    );
}
