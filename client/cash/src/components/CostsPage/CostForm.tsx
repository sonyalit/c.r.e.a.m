import { useEffect } from "react";
import { $totalPrice } from "../../context/costs";
import { useStore } from "effector-react";
import { ICostFormProps } from "../../types";
import { countTotalPrice } from "../../utils/costs";

const CostForm = ({costs}:ICostFormProps) => {
  const totalPrice = useStore($totalPrice);
  useEffect(()=>{
    countTotalPrice(costs)
  },[costs])
  return (
    <>
      <>
       
        <form className="main__form-coast">
          <div className="main__form-block">
            <label className="main__form-input" htmlFor="where">
              Куда было потрачено:
            </label>
            <input type="text" className="main__form-input_log" id="where" />
          </div>
          <div className="main__form-block">
            <label className="main__form-input" htmlFor="how">
              Сколько было потрачено:
            </label>
            <input type="number" className="main__form-input_log" id="how" />
          </div>
          <div className="main__form-block">
            <label className="main__form-input" htmlFor="when">
              Когда было потрачено:
            </label>
            <input type="date" className="main__form-input_log" id="when" />
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
