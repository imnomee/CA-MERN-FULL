import { Form, Link } from 'react-router-dom';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components/index';
const Register = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Register</h4>
                <FormRow
                    defaultValue="john"
                    labelText="name"
                    name="name"
                    type="text"
                />
                <FormRow
                    defaultValue="doe"
                    labelText="last name"
                    name="lastName"
                    type="text"
                />
                <FormRow type="text" name="location" defaultValue="earth" />
                <FormRow
                    type="email"
                    name="email"
                    defaultValue="example@email.com"
                />
                <FormRow
                    type="password"
                    name="password"
                    defaultValue="secret123"
                />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <p>Already a member?</p>
                <Link to="/login" className="member-btn">
                    Login
                </Link>
            </form>
        </Wrapper>
    );
};

export default Register;
