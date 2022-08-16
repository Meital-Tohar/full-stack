import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './page-not-found.styles.css';

import Loader from '../../components/shared/loader/Loader.component';

const PageNotFound = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const handleRedirectHome = () => navigate('/');

    return isLoading ? (
        <Loader />
    ) : (
        <main className="page-not-found">
            <h1>404</h1>

            <img className='image'src="https://media.istockphoto.com/photos/closeup-portrait-of-her-she-nice-attractive-puzzled-ignorant-girl-picture-id1132758418?b=1&k=20&m=1132758418&s=612x612&w=0&h=kYSjE-9ocuns5o2X-4BK8PV5diq8GQkS5IJktKRtV8c=" alt="notFoundImage"/>

            <button type="button" onClick={handleRedirectHome}>
                Go Back Home
            </button>
        </main>
    );
};

export default PageNotFound;