import React, { useEffect, useState } from "react";
import { formatMoney } from "../../utils/invest";
import { getInstrumentByUid } from "../../api/tinkoffClient";
import { IPortfolio, IShares } from "./types";
import classNames from "classnames";
interface IProps {
  portfolio: IPortfolio;
}

const Shares = ({ portfolio }: IProps) => {
  const [shares, setShares] = useState<IShares[]>([]);
  
  const getTicker = async (uid: string) => {
    const data = await getInstrumentByUid(uid);
    return { ticker: data?.instrument.ticker, name: data?.instrument.name };
  };
  useEffect(() => {
    const getShares = async () => {
      const shares = portfolio?.positions
        ?.filter(({ instrumentType }) => instrumentType === "share")
        ?.map((el) => ({
          totalPrice: formatMoney(
            el.averagePositionPrice,
            el.averagePositionPrice.currency
          ),
          quantity: el.quantity.units,
          uid: el.instrumentUid,
          yield: formatMoney(el.expectedYield),
        }));
        const getSharesTickers = shares?.map(async (el) => {
          const data = await getTicker(el.uid);
          return { ...el, ...data };
        })||[]
      const sharesWithTicker = await Promise.all(
        getSharesTickers
      );
      setShares(sharesWithTicker);
    };
    getShares();
  }, [portfolio]);
  return (
    <>
      <h3>Акции</h3>
      <table>
        {shares?.map((el) => (
          <tr key={el.ticker}>
            <td>{el.ticker}</td>
            <td>{el.name}</td>
            <td>{el.totalPrice}</td>
            <td 
            className={classNames({positive:Number(el.yield.slice(0,-2))>0},{negative:Number(el.yield.slice(0,-2))<0})}
            >
              {el.yield}
              </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Shares;
