import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authSliceActions } from "../store/store";
const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authSliceActions.logout());
  };
  return (
    <header className={classes.header}>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
      <h1>Redux Auth</h1>
    </header>
  );
};

export default Header;
