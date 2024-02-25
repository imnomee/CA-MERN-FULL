import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
    HomeLayout,
    Landing,
    Register,
    Login,
    DashboardLayout,
    Error,
} from './pages/index';

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
            },
        ],
        errorElement: <Error />,
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
