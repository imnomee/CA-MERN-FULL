import { useNavigation, redirect, Form, Link } from 'react-router-dom';
import { Logo, FormRow } from '../components/index';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    try {
        await customFetch.post('/auth/login', data);
        toast.success('login successful');
        return redirect('/dashboard');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return null;
    }
};
const Login = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Wrapper>
            <Form method="post" className="form">
                <Logo />
                <h4>Login</h4>
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
                <button type="button" className="btn btn-block">
                    explore the app
                </button>
                <p>
                    Not a member yet?
                    <Link to="/register" className="member-btn">
                        Register!
                    </Link>
                </p>
            </Form>
        </Wrapper>
    );
};

export default Login;
