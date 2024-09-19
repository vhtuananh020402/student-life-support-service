import { createBrowserRouter } from 'react-router-dom';

// routes
// import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import LogoutRoutes from './LogoutRoutes';
import LandingRoutes from './LandingRoutes';
import StudentRoutes from './StudentRoutes';

import MainRoutes from './MainRoutes';


// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([LandingRoutes, LoginRoutes, LogoutRoutes, StudentRoutes, MainRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
