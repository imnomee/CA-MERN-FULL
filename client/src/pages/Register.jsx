import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components/index';

const Register = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Register </h4>
                <FormRow type="text" name="name" defaultValue="nomee" />
                <FormRow
                    type="text"
                    name="lastName"
                    labelText="last name"
                    defaultValue="Rafiq"
                />
                <FormRow
                    labelText="Location"
                    type="text"
                    name="location"
                    defaultValue="my home"
                />
                <FormRow
                    labelText="Email"
                    type="email"
                    name="email"
                    defaultValue="nomee@gmail.com"
                />
                <FormRow
                    labelText="Password"
                    type="password"
                    name="password"
                    defaultValue="secret123"
                />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <p>
                    Already a member?
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;
