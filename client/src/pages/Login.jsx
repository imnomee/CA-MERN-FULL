import { Link } from 'react-router-dom';
import { Logo, FormRow } from '../components/index';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

const Login = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Login</h4>
                <FormRow
                    type="email"
                    name="email"
                    defaultValue="nomee@gmail.com"
                />
                <FormRow
                    type="password"
                    name="password"
                    defaultValue="secret123"
                />
                <button type="submit" className="btn btn-block">
                    Submit
                </button>
                <button type="button" className="btn btn-block">
                    explore the App
                </button>
                <p>
                    Not a member yet?
                    <Link to="/register" className="member-btn">
                        Register
                    </Link>
                </p>
            </form>
        </Wrapper>
    );
};

export default Login;
