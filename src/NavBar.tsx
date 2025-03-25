import { Link } from "react-router-dom";
import logo from "../src/assets/logoipsum-338.svg"

export default function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-logo-link w-32 h-auto" to="/">
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
        </ul>
      </nav>
    </>
  );
}