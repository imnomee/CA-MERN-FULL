import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>home</h1>,
    },
    {
        path: '/about',
        element: <h2>about page</h2>,
    },
]);

const App = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
