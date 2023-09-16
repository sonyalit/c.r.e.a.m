import { useStore } from "effector-react";
import "./App.css";
import { AuthPage } from "./components/AuthPage/AuthPage";
import { Header } from "./components/Header/Header";
import CostsPage from "./components/CostsPage/CostsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { $auth, setUsername, setAuth } from "./context/auth";
import { $alert } from "./context/alert";
import { Alert } from "./components/Alert/Alert";
import { getAuthDataFromLS, removeUser } from "./utils/auth";
import { useEffect } from "react";
import { useTheme } from "./hooks";

function App() {
  const { switchTheme, theme } = useTheme();
  const isLoggedIn = useStore($auth);
  const alert = useStore($alert);
  useEffect(() => {
    const auth = getAuthDataFromLS();
    if (!auth || !auth.access_token || !auth.refresh_token) {
      removeUser();
    } else {
      setAuth(true);
      setUsername(auth.username);
    }
  }, []);
  return (
    <div className={`App page ${theme}`}>
      <Header theme={theme} switchTheme={switchTheme}/>
      <Alert props={alert} />
      <Routes>
        <Route
          path={"/"}
          element={!isLoggedIn ? <Navigate to={"/login"} /> : <CostsPage />}
        />
        <Route path={"/login"} element={isLoggedIn? <Navigate to={"/"} /> :<AuthPage type="login" />} />
        <Route
          path={"/registration"}
          element={<AuthPage type="registration" />}
        />
      </Routes>
    </div>
  );
}

export default App;
