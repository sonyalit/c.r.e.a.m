import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthClient } from "../../api/authClient";
import { handleAlertMessage } from "../../utils/auth";

export const AuthPage = ({ type }: { type: "login" | "registration" }) => {
  const currentTitle = type === "login" ? "Вход" : "Регистрация";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      handleAlertMessage({
        alertStatus: "warning",
        alertText: "Заполните все поля",
      });
      return;
    }
    const result = await AuthClient.login(username, password);
    if (!result) return;
    navigate("/");
  };
  const handleRegistartion = async () => {
    if (!username || !password) {
      handleAlertMessage({
        alertStatus: "warning",
        alertText: "Заполните все поля",
      });
      return;
    }
    if (password.length < 8) {
      handleAlertMessage({
        alertStatus: "warning",
        alertText: "Пароль должен содержать больше 8 символов",
      });
    }
    const result = await AuthClient.registration(username, password);
    if (!result) return;
    navigate("/login");
  };
  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (type) {
      case "login":
        handleLogin();
        break;
      case "registration":
        handleRegistartion();
        break;
    }
  };
  return (
      <div className="main">
        <h1 className="main__header">{currentTitle}</h1>
        <form className="main__form" onSubmit={handleAuth}>
          <div className="main__form-block">
            <label className="main__form-input" htmlFor="user">
              Введите имя пользователя
            </label>
            <input
              type="text"
              className="main__form-input_log"
              id="user"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="main__form-block">
            <label className="main__form-input" htmlFor="password">
              Введите пароль
            </label>
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              className="main__form-input_log"
              id="password"
            />
          </div>
          <button className="button main__exit_button" type="submit">
            {type == "login" ? "Войти" : "Зарегистрироваться"}
          </button>
          <div className="main__form-registration">
            {type == "login" ? (
              <>
                <label className="main__form-input">Еще нет аккаунта?</label>
                <Link
                  className="main__registration_button"
                  to={"/registration"}
                >
                  Зарегистрироваться
                </Link>
              </>
            ) : (
              <>
                <label className="main__form-input">Уже есть аккаунт?</label>
                <Link className="main__registration_button" to={"login"}>
                  Войти
                </Link>
              </>
            )}
          </div>
        </form>
      </div>

    
  );
};
