export const Header = () => {
    return(
        <header className="header">
      <div className="header__logo">
        <a className="header__logo-link" href="#">Costs App</a>
      </div>
      <div className="header__user">
        <p className="header__user-name">IVAN</p>
      </div>
      <button className="button header__theme_button" type="button">
        Go Barbie
      </button>
      <button className="button header__exit_button" type="button">Вход</button>
    </header>
    )
}