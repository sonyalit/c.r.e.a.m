import { useStore } from "effector-react";
import "./App.css";
import { AuthPage } from "./components/AuthPage/AuthPage";
import { Header } from "./components/Header/Header";
import CostsPage from "./components/CostsPage/CostsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { $auth } from "./context/auth";
//todo add global color theme styles

function App() {
  const isLoggedIn = useStore($auth);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path={"/"}
          element={!isLoggedIn ? <Navigate to={"/login"} /> : <CostsPage />}
        />
        <Route path={"/login"} element={<AuthPage type="login" />} />
        <Route
          path={"/registartion"}
          element={<AuthPage type="registration" />}
        />
      </Routes>
    </div>
  );
}

export default App;
