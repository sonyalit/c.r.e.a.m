import React from "react";

export const AuthPage = ({ type }: { type: "login" | "registration" }) => {
  const currentTitle = type === "login" ? "Вход" : "Регистрация";
  return (
   
    <main className="main">
   <div>
      <h1 className="main__header">{currentTitle}</h1>
      <form className="main__form">
        <div className="main__form-block">
          <label className="main__form-input" htmlFor="user">
            Введите имя пользователя
          </label>
          <input type="text" className="main__form-input_log" id="user" />
        </div>
        <div className="main__form-block">
          <label className="main__form-input" htmlFor="password">
            Введите пароль
          </label>
          <input
            type="password"
            className="main__form-input_log"
            id="password"
          />
        </div>
        <button className="button main__exit_button" type="button">
          {type == "login" ? "Войти" : "Зарегистрироваться"}
        </button>
        <div>
          <label className="main__form-input">Еще нет аккаунта?</label>
          <button className="main__registration_button" type="button">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
    </main>
  );
};
