import { useEffect } from "react";
import CostForm from "./CostForm";
import CostList from "./CostList";
import { $costs, setCosts } from "../../context/costs";
import { useStore } from "effector-react";
import { getAuthDataFromLS } from "../../utils/auth";
import { getCostsFx } from "../../api/costsClient";

const CostsPage = () => {
  const costs = useStore($costs);
  const loadData = async () => {
    const authData = getAuthDataFromLS();
    const data = await getCostsFx({
      url: "/cost",
      token: authData.access_token,
    });
    setCosts(data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <main className="main">
      <h1 className="main__header">Учёт моих расходов</h1>
      <CostForm costs={costs} />
      <CostList costs={costs}/>
    </main>
  );
};

export default CostsPage;
