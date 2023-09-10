import React from "react";

export const AuthPage = ({type}:{type:'login'|'registration'}) => {
    const currentTitle = type === 'login'?'Войти':'Регистрация'
    return(
        <div>
            <h1 className="main__header">{currentTitle}</h1>
      <form className="main__form">
        <div className="main__form-block">
        <label className="main__form-input" htmlFor="user">Придумайте имя пользователя</label>
        <input type="text" className="main__form-input_log" id="user" />
        </div>
        <div className="main__form-block">
        <label className="main__form-input" htmlFor="password">Придумайте пароль </label>
        <input type="password" className="main__form-input_log" id="password"/>
        </div>
        <button className="button main__exit_button" type="button">Войти</button>
        <div>
        <label className="main__form-input" >Еще нет аккаунта?</label>
        <button className="main__registration_button" type="button">Зарегестрироваться</button>
      </div>
      </form>
        </div>
    );
}