import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { $totalPrice, createCost } from "../../context/costs";
import { useStore } from "effector-react";
import { ICostFormProps } from "../../types";
import { countTotalPrice } from "../../utils/costs";
import { createCostFx } from "../../api/costsClient";
import { getAuthDataFromLS, handleAlertMessage } from "../../utils/auth";

const CostForm = ({ costs }: ICostFormProps) => {
  const totalPrice = useStore($totalPrice);
  const [price, setPrice] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };
  const handleItem = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text || !category || !date || !price) {
      handleAlertMessage({
        alertStatus: "warning",
        alertText: "Заполните все поля",
      });
      return;
    }
    if (isNaN(+price)) {
      handleAlertMessage({
        alertStatus: "warning",
        alertText: "Стоимость должна быть представлена в числовом формате",
      });
      return;
    }
    const token = getAuthDataFromLS();
    const result = await createCostFx({
      url: "/cost",
      cost: { text, category, date, price },
      token: token.access_token,
    });
    if (!result) {
      return;
    }
    createCost(result);
    setCategory("");
    setDate("");
    setPrice("");
    setText("");
    handleAlertMessage({
      alertStatus: "success",
      alertText: "Успешно создано",
    });
   
  };
  useEffect(() => {
    countTotalPrice(costs);
  }, [costs]);
  return (
    <>
      <>
        <form className="main__form-coast" onSubmit={handleSubmit}>
          <div className="main__form-block">
            <label className="main__form-input" htmlFor="where">
              Куда было потрачено:
            </label>
            <input
              type="text"
              className="main__form-input_log"
              id="where"
              value={text}
              onChange={handleItem}
            />
          </div>
          <div className="main__form-block">
            <label className="main__form-input" htmlFor="how">
              Сколько было потрачено:
            </label>
            <input
              type="number"
              className="main__form-input_log"
              id="how"
              value={price}
              onChange={handlePrice}
            />
          </div>
          <div className="main__form-block">
            <label className="main__form-input" htmlFor="when">
              Когда было потрачено:
            </label>
            <input
              type="date"
              className="main__form-input_log"
              id="when"
              value={date}
              onChange={handleDate}
            />
          </div>
          <div className="main__form-block">
            <label className="main__form-input" htmlFor="category">
              Категория:
            </label>
            <select
              className=""
              id="main__form-select"
              value={category}
              onChange={handleCategory}
            >
              <option className="main__form-select-option" value="">Выберите категорию</option>
              <option  className="main__form-select-option" value="Инвестиции">Инвестиции</option>
              <option className="main__form-select-option" value="Продукты">Продукты</option>
              <option className="main__form-select-option" value="Здоровье">Здоровье</option>
              <option className="main__form-select-option" value="Развлечения">Развлечения</option>
              <option className="main__form-select-option" value="Коммунальные услуги">Коммунальные услуги</option>
              <option className="main__form-select-option" value="Обязательные платежи">Обязательные платежи</option>
            </select>
          </div>
          <button className="button main__exit_button" type="submit">
            Добавить
          </button>
        </form>
      </>
      <p className="main__final_prise">Итого: {totalPrice} рублей</p>
    </>
  );
};

export default CostForm;
