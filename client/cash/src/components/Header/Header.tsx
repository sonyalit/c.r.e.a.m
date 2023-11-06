import { Link, useNavigate } from "react-router-dom";
import { $auth, $username } from "../../context/auth";
import { useStore } from "effector-react";
import { removeUser } from "../../utils/auth";
interface IProps {
  theme: string;
  switchTheme: () => void;
}





export const Header = ({ theme, switchTheme }: IProps) => {
  const isLoggedIn = useStore($auth);
  const username = useStore($username);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__logo-link" to={"/"}>
        </Link>
        <Link className="header__logo-link-invest" to={"/invest"}>
        </Link>
        <Link className="header__logo-link-stats" to={"/stats"}>
        </Link>
      </div>
      <div className="header__user">
        <p className="header__user-name">{username}</p>
      </div>
      <section className="section_button">
        <button
          className="button header__theme_button"
          type="button"
          onClick={switchTheme}
        >
          {theme === "light" ? "Go Ken" : "Go Barbie"}
        </button>
        {!isLoggedIn ? (
          <button
            className="button header__exit_button"
            type="button"
            onClick={handleClick}
          >
            Вход
          </button>
        ) : (
          <button
            className="button header__exit_button"
            type="button"
            onClick={removeUser}
          >
            Выйти
          </button>
        )}
      </section>
    </header>
  );
};
