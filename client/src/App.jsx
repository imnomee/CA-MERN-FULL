import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//import the pages we need for navigation through App.jsx
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

//This function is to check the default theme at the start of app render
//if the dark storage has the item dark-theme set to true, we have the dark theme set in the last session
//we set the dark-theme at the start of this session
export const checkDefaultTheme = () => {
    const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
    document.body.classList.toggle('dark-theme', isDarkTheme);
    return isDarkTheme;
};
checkDefaultTheme();

//create a react router object to create a route structure of the app
//1. we create a Browser router by importing 'createBrowserRouter'
//2. we use that 'createBrowserRouter' using 'RouterProvider'
//3. The RouterProvider handles the main routing functionality
const router = createBrowserRouter([
    {
        path: '/', //first main route which will have all the childrens when we open the app
        element: <HomeLayout />,
        children: [
            //all the children of this route doesn't need a root slash before them
            {
                index: true, //this is the main page we land to when we navigate to homepage
                element: <Landing />,
            },
            {
                path: 'register', //register route
                element: <Register />,
            },
            {
                path: 'login', //login route
                element: <Login />,
            },
            {
                path: 'dashboard', //dashboard route has got multiple children in it
                element: <DashboardLayout />,
                children: [
                    {
                        index: true, //this is the route we land to when we navigate to dashboard route
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
