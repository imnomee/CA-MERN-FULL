import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar, SmallSidebar, NavBar } from '../components/index';
import { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

const DashboardLayout = () => {
    //temp
    const user = { name: 'nomee' };
    const [showSideBar, setShowSideBar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        console.log('toggle dark themes');
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
