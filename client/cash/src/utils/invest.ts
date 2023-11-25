import { IMoney } from "../components/InvestPage/types";

export const formatMoney = (
    moneyObject: IMoney,
    currency = "rub"
  ) => {
    enum moneySymbols{
      'rub'='₽',
    }
    return (
      Number(
        String(moneyObject?.units) + "." + String(Math.abs(moneyObject?.nano))
      ).toFixed(2) +
      " " +
      moneySymbols[currency as keyof typeof moneySymbols]
    );
  };
 