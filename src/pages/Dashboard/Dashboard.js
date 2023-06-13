import {
    Grid,
    Typography
  } from '@mui/material';
import Count from "../../components/cards/Count";

export const Dashboard = ({studentCount = 0, verifiedDegrees = 0}) => {  
    return (
        <Grid container >
            <Grid item xs={12} sx={{ m: 2, textAlign: 'center' }}>
              <Typography variant="h3">Welcome to dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={6} m={4} lg={3}>
              <Count title="Student count" count={studentCount} />
            </Grid>
            <Grid item xs={12} sm={6} m={4} lg={3}>
              <Count title="Verified degrees" count={verifiedDegrees}/>
            </Grid>
            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        </Grid>
    );
}
