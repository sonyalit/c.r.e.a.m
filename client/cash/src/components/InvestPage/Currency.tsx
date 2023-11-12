import React, { useEffect, useState } from 'react';
import { formatMoney } from '../../utils/invest';
interface IProps {
    portfolio:any;
}
const Currency = ({portfolio}:IProps) => {
    const [currencies, setCurrencies] = useState([]);
    const getCurrencies = () => {
        const moneyValues = portfolio?.positions
          ?.filter(({ instrumentType }) => instrumentType === "currency")
          ?.map((el) => formatMoney(el.quantity, el.currencyPrice?.currency));
        setCurrencies(moneyValues);
      };
      useEffect(()=>{
        getCurrencies()
      },[])
    return (
        <><h3>Валюта</h3><div>
            {currencies?.map((el) => (
                <p>{el}</p>
            ))}
        </div></>
    );
};

export default Currency;