import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
    const error = useRouteError();
    console.log(error);
    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="not-found-img" />
                    <h3>Ohhh!!! Page not found...</h3>
                    <p>
                        We can&apos;t seem to find the page you are looking for.
                    </p>
                    <Link to="/dashboard">-= Back to Home =-</Link>
                </div>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <h3>Something went wrong...</h3>
        </Wrapper>
    );
};

export default Error;
