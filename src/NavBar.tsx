import { Link } from "react-router-dom";
import logo from "../src/assets/logoipsum-338.svg"
import { useContext } from "react";
import { UserContext } from "./App";
import Login from "./Login";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { session } = useContext(UserContext);
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-logo-link" to="/">
          <img
            id="logo"
            className="nav-logo"
            src={logo}
            alt="logo"
          />
        </Link>

        <ul className="nav-right-list">
          <li className="nav-message-board-list-item">
            <Link to="/1" className="nav-message-board-link">
              message board
            </Link>
          </li>
          <li className="nav-auth-item">
            {session?.user ? <UserMenu /> : <Login />} // see a bit further down
            for the UserMenu.tsx file!
          </li>
        </ul>
      </nav>
    </>
  );
}