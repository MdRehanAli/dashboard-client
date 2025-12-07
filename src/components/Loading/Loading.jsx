import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="min-h-screen flex  justify-center items-center">
            <BounceLoader size={70} color={'#FF3E01'} />
        </div>
    );
};

export default Loading;