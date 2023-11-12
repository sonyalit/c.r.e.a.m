import { IMoney } from "../components/InvestPage/types";

export const formatMoney = (
    moneyObject: IMoney,
    currency = "rub"
  ) => {
    return (
      Number(
        String(moneyObject?.units) + "." + String(Math.abs(moneyObject?.nano))
      ).toFixed(2) +
      " " +
      currency
    );
  };
 