import React from 'react';
import CostItem from './CostItem';
import CostItemRed from './CostItemRed';

const CostList = () => {
    return (
        <ul className="costs__list">
            <CostItemRed />
            <CostItem />
        </ul>
    );
};

export default CostList;