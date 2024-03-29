import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from '../components/index';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job <span>tracking</span> App
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit quis pariatur impedit itaque nesciunt, aut alias ea
                        corporis veritatis minus. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Reiciendis, illum.
                    </p>
                    <Link to="/register" className="btn register-link">
                        Register
                    </Link>
                    <Link to="/Login" className="btn">
                        Login / Demo User
                    </Link>
                    <img src={main} alt="job hunt" className="img main-img" />
                </div>
            </div>
        </Wrapper>
    );
};

export default Landing;
