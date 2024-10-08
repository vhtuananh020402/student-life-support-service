// material-ui
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://github.com/vhtua/student-life-support-service" target="_blank" underline="hover">
      VGU Student Life Support Service
    </Typography>
    <Typography variant="subtitle2" component={Link} href="https://github.com/vhtua" target="_blank" underline="hover">
      &copy; vhtua
    </Typography>
  </Stack>
);

export default AuthFooter;
