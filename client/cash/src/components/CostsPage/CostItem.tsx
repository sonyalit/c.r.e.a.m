import React from 'react';

const CostItem = () => {
    return (
        <li className="costs__list-item-ready">
        <div className="costs__list-item-block">
          <h2 className="costs__list-item_header">Магазин</h2>
          <p className="costs__list-item_shop-name">"Магнит"</p>
          <p className="costs__list-item_shop-time">
            <time>17.08.21</time>
          </p>
        </div>
        <div className="costs__list-item-block">
          <p className="costs__list-item_shop-sum">Сумма: 12121</p>

          <button className="button main__safe_button" type="button">
            Изменить
          </button>
          <button className="button main__special_button" type="button">X</button>
        </div>
      </li>
    );
};

export default CostItem;