import ActiveUser from "./components/ActiveUser";
import Game from "./components/Game";
import { Home } from "./components/Home";
import LogOutPage from "./components/LogOutPage";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterConfirm from "./components/RegisterConfirm";
import UserHighScore from "./components/UserHighScore";
import UserProfile from "./components/UserProfile";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },

    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/activeuser',
        element: <ActiveUser />
    },
  
    
    {
        path: '/logoutpage',
        element: <LogOutPage />
    },
    {
        path: '/registerconfirm',
        element: <RegisterConfirm />
    },
    {
        path: '/game',
        element: <Game />
    },
    {
        path: '/highscore',
        element: <UserHighScore />
    },
    {
        path: '/userprofile',
        element: <UserProfile />
    },
   
];

export default AppRoutes;
