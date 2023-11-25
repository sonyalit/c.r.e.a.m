import { useEffect, useState } from 'react';
import { formatMoney } from '../../utils/invest';
import { IPortfolio } from './types';
interface IProps {
    portfolio:IPortfolio;
}

const Currency = ({portfolio}:IProps) => {
    const [currencies, setCurrencies] = useState<string[]>([]);
    useEffect(()=>{
        const getCurrencies = () => {
            const moneyValues = portfolio?.positions
              ?.filter(({ instrumentType }) => instrumentType === "currency")
              ?.map((el) => formatMoney(el.quantity, el.currencyPrice?.currency));
            setCurrencies(moneyValues);
          };
        getCurrencies()
      },[portfolio])
    return (
        <><h3>Валюта</h3><div>
            {currencies?.map((el) => (
                <p key={el}>{el}</p>
            ))}
        </div></>
    );
};

export default Currency;