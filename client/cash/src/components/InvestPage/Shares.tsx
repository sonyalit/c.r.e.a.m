import React, { useEffect, useState } from "react";
import { formatMoney } from "../../utils/invest";
import { getInstrumentByUid } from "../../api/tinkoffClient";
import { IPortfolio, IShares } from "./types";
interface IProps {
  portfolio: IPortfolio;
}

const Shares = ({ portfolio }: IProps) => {
  const [shares, setShares] = useState<IShares[]>([]);
  const formatShares = async () => {
    getShares();
  };

  const getTicker = async (uid: string) => {
    const data = await getInstrumentByUid(uid);
    return { ticker: data?.instrument.ticker, name: data?.instrument.name };
  };
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
    const sharesWithTicker = await Promise.all(
      shares?.map(async (el) => {
        const data = await getTicker(el.uid);
        return { ...el, ...data };
      })
    );
    setShares(sharesWithTicker);
  };
  useEffect(() => {
    formatShares();
  }, []);
  return (
    <>
      <h3>Акции</h3>
      <div>
        {shares?.map((el) => (
          <div key={el.ticker}>
            <p>{el.ticker}</p>
            <p>{el.name}</p>
            <p>{el.totalPrice}</p>
            <p>{el.yield}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shares;
