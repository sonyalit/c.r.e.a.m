import { Link, useNavigate } from "react-router-dom";
import { $username } from "../../context/auth";
import { useStore } from "effector-react";
interface IProps{
  theme:string;
  switchTheme:()=>void;
}
export const Header = ({theme, switchTheme}:IProps) => {
  
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
          {theme === "light" ? "Go Barbie" : "Go Ken"}
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
