import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import LoginRoutes from './AuthenticationRoutes';
import LandingRoutes from './LandingRoutes';


// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([MainRoutes, LoginRoutes, LandingRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
