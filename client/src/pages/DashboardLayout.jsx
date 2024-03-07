import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, SmallSidebar, NavBar } from '../components/index';
import { createContext, useContext, useState } from 'react';
import { checkDefaultTheme } from '../App';
import customFetch from '../utils/customFetch';

export const loader = async () => {
    try {
        const { data } = await customFetch.get('/users/current-user');
        return data;
    } catch (error) {
        return error;
    }
};
const DashboardContext = createContext();

const DashboardLayout = () => {
    const data = useLoaderData();
    console.log(data);
    //temp
    const user = { name: 'nomee' }; //this will come from our server
    const [showSideBar, setShowSideBar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('dark-theme', newDarkTheme);
    };

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);
    };

    const logoutUser = async () => {
        console.log('logout user');
    };

    return (
        <DashboardContext.Provider
            value={{
                user,
                showSideBar,
                isDarkTheme,
                toggleDarkTheme,
                toggleSideBar,
                logoutUser,
            }}>
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <NavBar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
