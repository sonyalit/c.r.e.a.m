import React from 'react';

const CostForm = () => {
    return (
        <><><h1 className="main__header">Учёт моих расходов</h1>
            <form className="main__form-coast">
                <div className="main__form-block">
                    <label className="main__form-input" htmlFor="where"
                    >Куда было потрачено:
                    </label>
                    <input type="text" className="main__form-input_log" id="where" />
                </div>
                <div className="main__form-block">
                    <label className="main__form-input" htmlFor="how"
                    >Сколько было потрачено:
                    </label>
                    <input type="number" className="main__form-input_log" id="how" />
                </div>
                <div className="main__form-block">
                    <label className="main__form-input" htmlFor="when"
                    >Когда было потрачено:
                    </label>
                    <input type="date" className="main__form-input_log" id="when" />
                </div>
                <button className="button main__exit_button" type="button">Добавить</button>

            </form></>
            <p className="main__final_prise">Итого: 2121212 рублей</p></>

    );
};

export default CostForm;