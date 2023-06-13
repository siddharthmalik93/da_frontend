import Typography from '@mui/material/Typography';

export const FieldHeading = ({title}) => {
    return (
        <Typography sx={{ p: 2 }} variant="h7">
            {title}
        </Typography>
    );
}
