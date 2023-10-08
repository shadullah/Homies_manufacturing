import React from 'react';
import { Link } from 'react-router-dom';
import notfound from "../../../../Images/error-text-broken-glass-font.jpg"

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-4xl my-12'>What are you looking for ?? <br /> It's a 404 page</h2>
            <Link className='text-green-400 text-xl underline' to="/">Return to Home</Link>
            <img className='my-12' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;