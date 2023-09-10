import React from "react";
import "./App.css";
import { AuthPage } from "./components/AuthPage/AuthPage";
import { Header } from "./components/Header/Header";
import CostsPage from "./components/CostsPage/CostsPage";

function App() {
  return (
    <div className="App">
    <Header />
      <CostsPage/>
    </div>
  );
}

export default App;
