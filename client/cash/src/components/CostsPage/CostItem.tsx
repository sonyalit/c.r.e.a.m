import React from 'react';
import { ICost } from '../../types';

const CostItem = ({cost, index}:{cost:ICost, index:number}) => {
    return (
        <li className="costs__list-item-ready">
        <div className="costs__list-item-block">
          <h2 className="costs__list-item_header">{index}</h2>
          <p className="costs__list-item_shop-name">{cost.text}</p>
          <p className="costs__list-item_shop-time">
         {new Date(cost.date).toLocaleDateString()}
          </p>
          <p className="">{cost.category}</p>
        </div>
        <div className="costs__list-item-block">
          <p className="costs__list-item_shop-sum">Сумма: {cost.price}</p>

          <button className="button main__safe_button" type="button">
            Изменить
          </button>
          <button className="button main__special_button" type="button">X</button>
        </div>
      </li>
    );
};

export default CostItem;