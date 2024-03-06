import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components/index';
import customFetch from '../utils/customFetch.js';
import { toast } from 'react-toastify';

//register user action function
export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post('/auth/register', data);
        toast.success('registration successful');
        //we need to return something for this function
        return redirect('/login');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        // console.log(error.response.data);
        return error;
    }
};

const Register = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Wrapper>
            <Form method="post" className="form">
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
                <button
                    type="submit"
                    className="btn btn-block"
                    disabled={isSubmitting}>
                    {isSubmitting ? 'submitting...' : 'submit'}
                </button>
                <p>
                    Already a member?
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </Form>
        </Wrapper>
    );
};

export default Register;
