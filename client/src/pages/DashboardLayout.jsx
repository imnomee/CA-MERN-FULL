import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSideBar, NavBar, SmallSideBar } from '../components/index.js';
import { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

const DashboardLayout = () => {
    //temp user
    const user = { name: 'nomee' };
    const [showSideBar, setShowSideBar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        console.log('toggle dark theme');
    };
    const toggleSideBar = () => {
        console.log('side bar toggle clicked');
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
                <main className="dashbaord">
                    <SmallSideBar />
                    <BigSideBar />
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
