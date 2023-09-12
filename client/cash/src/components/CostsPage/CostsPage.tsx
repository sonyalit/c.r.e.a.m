import React from 'react';
import CostForm from './CostForm';
import CostList from './CostList';

const CostsPage = () => {
    return (
        <div>
            <body className='page'>
            <main className='main'>
            <CostForm/>
            <p className="main__final_prise">Итого: 2121212 рублей</p>
            <CostList/>
            </main>
            </body>
        </div>
    );
};

export default CostsPage;