import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ProductDetail = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-16'>Purchase</h1>
        </div>
    );
};

export default ProductDetail;