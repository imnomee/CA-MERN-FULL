import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
    HomeLayout,
    Landing,
    Register,
    Login,
    DashboardLayout,
    Error,
    AddJob,
    AllJobs,
    Stats,
    Profile,
    Admin,
} from './pages/index';

export const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
};
checkDefaultTheme();

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
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
                children: [
                    {
                        index: true,
                        element: <AddJob />,
                    },
                    {
                        path: 'stats',
                        element: <Stats />,
                    },
                    {
                        path: 'all-jobs',
                        element: <AllJobs />,
                    },
                    {
                        path: 'profile',
                        element: <Profile />,
                    },
                    {
                        path: 'admin',
                        element: <Admin />,
                    },
                ],
            },
        ],
        errorElement: <Error />,
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
