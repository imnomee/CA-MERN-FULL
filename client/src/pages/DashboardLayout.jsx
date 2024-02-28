import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, SmallSidebar, NavBar } from '../components/index';
import { createContext, useContext, useState } from 'react';
import { checkDefaultTheme } from '../App';

const DashboardContext = createContext();
// const checkDefaultTheme = () => {
//     const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
//     document.body.classList.toggle('dark-theme', isDarkTheme);
//     return isDarkTheme;
// };
const DashboardLayout = () => {
    //temp
    const user = { name: 'nomee' };
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
