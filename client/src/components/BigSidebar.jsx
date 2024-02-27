import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';

const BigSidebar = () => {
    const { showSideBar } = useDashboardContext();
    return (
        <Wrapper>
            <div
                className={
                    showSideBar
                        ? 'sidebar-container'
                        : 'sidebar-container  show-sidebar'
                }>
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks isBigSideBar />
                </div>
            </div>
        </Wrapper>
    );
};

export default BigSidebar;
