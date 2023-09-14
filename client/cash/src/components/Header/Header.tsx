import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks";
import { $username } from "../../context/auth";
import { useStore } from "effector-react";
export const Header = () => {
  const { switchTheme, theme } = useTheme();
  const username = useStore($username);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <body className="page">
      <header className="header">
        <div className="header__logo">
          <Link className="header__logo-link" to={"/"}>
            Costs App
          </Link>
        </div>
        <div className="header__user">
          <p className="header__user-name">{username}</p>
        </div>
        <button
          className="button header__theme_button"
          type="button"
          onClick={switchTheme}
        >
          {theme === "light" ? "Go Barbie" : "Go Light"}
        </button>
        <button
          className="button header__exit_button"
          type="button"
          onClick={handleClick}
        >
          Вход
        </button>
      </header>
    </body>
  );
};
