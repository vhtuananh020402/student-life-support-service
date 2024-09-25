// material-ui
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import AnimateButton from 'views/roles/student/ui-component/extended/AnimateButton';

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => {
  const cardSX = {
    content: '""',
    position: 'absolute',
    width: 200,
    height: 200,
    borderColor: 'warning.main'
  };

  return (
    <Card
      sx={{
        bgcolor: 'warning.light',
        my: 2,
        overflow: 'hidden',
        position: 'relative',
        '&:after': {
          border: '19px solid ',
          borderRadius: '50%',
          top: '65px',
          right: '-150px',
          ...cardSX
        },
        '&:before': {
          border: '3px solid ',
          borderRadius: '50%',
          top: '145px',
          right: '-70px',
          ...cardSX
        }
      }}
    >
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4">Ready to support students?</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color={'grey.900'} sx={{ opacity: 0.6 }}>
              Students really need<br />
              your support.
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row">
              <Link sx={{ textDecoration: 'none' }} href="/staff/tickets/available-tickets" target="_self">
                <AnimateButton>
                  <Button variant="contained" color="warning" sx={{ boxShadow: 'none' }}>
                    View available tickets
                  </Button>
                </AnimateButton>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UpgradePlanCard;
