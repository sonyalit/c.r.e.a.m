import React, { ChangeEvent, FormEvent, useState } from "react";
import { ICost } from "../../types";
import { deleteCostFx, editCostFx } from "../../api/costsClient";
import { deleteCost, editCost } from "../../context/costs";
import { getAuthDataFromLS, handleAlertMessage } from "../../utils/auth";

const CostItem = ({ cost, index }: { cost: ICost; index: number }) => {
  const [edit, setEdit] = useState(false);
  const deleteItem = (id: string) => {
    const auth = getAuthDataFromLS();
    deleteCostFx({ url: "/cost", id, token: auth.access_token });
    deleteCost(id);
    handleAlertMessage({ alertStatus: "sucess", alertText: "Успешно удалено" });
  };
  const handleEdit = () => {
    setEdit(true);
  };
  const handleCancle = () => {
    setEdit(false);
  };
  const [editPrice, setEditPrice] = useState(cost.price);
  const [editText, setEditText] = useState(cost.text);
  const [editDate, setEditDate] = useState(cost.date);
  const [editCategory, setEditCategory] = useState(cost.category);
  const handleEditPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setEditPrice(e.target.value);
  };
  const handleEditItem = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };
  const handleEditDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEditDate(e.target.value);
  };
  const handleEditCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setEditCategory(e.target.value);
  };
  const handleEditSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      editText === cost.text &&
      editCategory === cost.category &&
      editDate === cost.date &&
      editPrice === cost.price
    ) {
      handleAlertMessage({
        alertStatus: "warning",
        alertText: "Нет изменений",
      });
      setEdit(false);
      return;
    }
    if (isNaN(+editPrice)) {
      handleAlertMessage({
        alertStatus: "warning",
        alertText: "Стоимость должна быть представлена в числовом формате",
      });
      return;
    }
    const token = getAuthDataFromLS();
    const result = await editCostFx({
      url: "/cost",
      cost: {
        ...cost,
        text: editText,
        category: editCategory,
        date: editDate,
        price: editPrice,
      },
      token: token.access_token,
    });
    if (!result) {
      return;
    }
    editCost(result);
    handleAlertMessage({
      alertStatus: "success",
      alertText: "Успешно изменено",
    });
    setEdit(false);
  };
  return (
    <li className="costs__list-item-ready">
      {!edit ? (
        <>
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

            <button
              className="button main__safe_button"
              type="button"
              onClick={handleEdit}
            >
              Изменить
            </button>
            <button
              className="button main__special_button"
              type="button"
              onClick={() => deleteItem(cost._id as string)}
            >
              X
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleEditSubmit}>
          <h2 className="costs__list-item_header">{index}</h2>
          <input
            type="text"
            className="main__form-input_log"
            value={editText}
            onChange={handleEditItem}
          />
          <input
            type="date"
            className="main__form-input_log"
            value={new Date(editDate).toLocaleDateString("en-ca")}
            onChange={handleEditDate}
          />
          <input
            type="number"
            className="main__form-input_log"
            value={editPrice}
            onChange={handleEditPrice}
          />
          <select
            className=""
            id="category"
            value={editCategory}
            onChange={handleEditCategory}
          >
            <option value="Инвестиции">Инвестиции</option>
            <option value="Продукты">Продукты</option>
          </select>
          <button className="button main__safe_button" type="submit">
            Сохранить
          </button>
          <button
            className="button main__cancel_button"
            type="button"
            onClick={handleCancle}
          >
            Отмена
          </button>
        </form>
      )}
    </li>
  );
};

export default CostItem;
