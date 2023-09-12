import React from 'react';

const CostItemRed = () => {
    return (
      <li className="costs__list-item">
      <h2 className="costs__list-item_header">Магазин</h2>
      <input
        type="text"
        placeholder="Магазин трат"
        className="main__form-input_log"
      />
      <input type="date" className="main__form-input_log" />
      <input
        type="number"
        className="main__form-input_log"
        placeholder="Сумма трат"
      />

      <button className="button main__safe_button" type="button">
        Сохранить
      </button>
      <button className="button main__cancel_button" type="button">
        Отмена
      </button>
      <button className="button main__special_button" type="button">X</button>
    </li>
    );
};

export default CostItemRed;