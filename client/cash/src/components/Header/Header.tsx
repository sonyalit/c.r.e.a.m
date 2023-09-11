import { useTheme } from "../../hooks";

export const Header = () => {
  const { switchTheme, theme } = useTheme();
  return (
    <header className="header">
      <div className="header__logo">
        <a className="header__logo-link" href="#">
          Costs App
        </a>
      </div>
      <div className="header__user">
        <p className="header__user-name">IVAN</p>
      </div>
      <button
        className="button header__theme_button"
        type="button"
        onClick={switchTheme}
      >
        {theme === "light" ? "Go Barbie" : "Go Light"}
      </button>
      <button className="button header__exit_button" type="button">
        Вход
      </button>
    </header>
  );
};
