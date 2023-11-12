export const formatMoney = (
    moneyObject: { units: number; nano: number },
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
 