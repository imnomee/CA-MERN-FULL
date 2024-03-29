import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
    AddJob,
    AllJobs,
    DeleteJob,
    Admin,
    DashboardLayout,
    EditJob,
    Error,
    HomeLayout,
    Landing,
    Login,
    Profile,
    Register,
    Stats,
} from './pages/index.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'dashboard',
                element: <DashboardLayout />,
            },
        ],
    },
]);
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
