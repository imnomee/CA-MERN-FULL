import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Logo } from '../components/index.js';
import links from '../utils/links.jsx';
import { NavLink } from 'react-router-dom';

const SmallSideBar = () => {
    const { showSideBar, toggleSideBar } = useDashboardContext();

    return (
        <Wrapper>
            <div
                className={
                    showSideBar
                        ? 'sidebar-container show-sidebar'
                        : 'sidebar-container'
                }>
                <div className="content">
                    <button
                        type="button"
                        className="close-btn"
                        onClick={toggleSideBar}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <div className="nav-links">
                        {links.map((link) => {
                            const { text, path, icon } = link;
                            return (
                                <NavLink
                                    to={path}
                                    key={text}
                                    className="nav-link"
                                    onClick={toggleSideBar}
                                    end>
                                    <span className="icon">{icon}</span>
                                    {text}
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default SmallSideBar;
