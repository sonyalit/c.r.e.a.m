import React from "react";
import CostForm from "./CostForm";
import CostList from "./CostList";

const CostsPage = () => {
  return (
    <main className="main">
      <CostForm />
      <CostList />
    </main>
  );
};

export default CostsPage;
