import React from 'react';
import CostForm from './CostForm';
import CostList from './CostList';

const CostsPage = () => {
    return (
        <div>
            <body className='page'>
            <main className='main'>
            <CostForm/>
            <CostList/>
            </main>
            </body>
        </div>
    );
};

export default CostsPage;