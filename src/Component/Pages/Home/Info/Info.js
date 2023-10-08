import { faHandshake,faLock,faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard cardTitle='Minimum Shipping Cost' detail="For orders from 50$" icon={faTruckFast} className="text-5xl ml-5"></InfoCard>
            <InfoCard cardTitle='Support Full Day' detail="Call us Anytime" icon={faHandshake} className="text-5xl ml-5"></InfoCard>
            <InfoCard cardTitle='Guaranteed Safety' detail="Only secure Payments" icon={faLock} className="text-5xl ml-5"></InfoCard>
        </div>
    );
};

export default Info;