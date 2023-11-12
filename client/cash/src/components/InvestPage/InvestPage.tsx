import { useStore } from "effector-react";
import { useEffect } from "react";
import { $portfolio, setPortfolio } from "../../context/invest";
import { getPortfolioFx } from "../../api/tinkoffClient";
import Currency from "./Currency";
import Shares from "./Shares";
import { formatMoney } from "../../utils/invest";

const InvestPage = () => {
  const portfolio = useStore($portfolio);

  const loadData = async () => {
    const data = await getPortfolioFx();
    setPortfolio(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  
  return (
    <main className="main">
      <h1 className="main__header">Мои инвестиции</h1>
      <h2>
        Общая стоимость портфеля {formatMoney(portfolio?.totalAmountPortfolio)}
      </h2>
      <Currency portfolio={portfolio} />
      <Shares portfolio={portfolio} />
    </main>
  );
};

export default InvestPage;
