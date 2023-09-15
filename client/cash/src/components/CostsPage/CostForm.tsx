import { ChangeEvent, FormEvent,  useEffect, useState } from "react";
import { $totalPrice } from "../../context/costs";
import { useStore } from "effector-react";
import { ICostFormProps } from "../../types";
import { countTotalPrice } from "../../utils/costs";

const CostForm = ({ costs }: ICostFormProps) => {
  const totalPrice = useStore($totalPrice);
  const [price, setPrice] = useState(0);
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const handleItem = (e: ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };
  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
              value={item}
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
              id="category"
              value={category}
              onChange={handleCategory}
            >
              <option value="Инвестиции">Инвестиции</option>
              <option value="Продукты">Инвестиции</option>
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
