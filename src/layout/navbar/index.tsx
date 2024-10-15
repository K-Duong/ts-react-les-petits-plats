import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../router/router";
import logo from "../../assets/logo/logo.svg";
import "./style.css";

function NavBar(props: PropsWithChildren) {
  return (
    <nav>
      <img id="logo-header" src={logo} alt="logo les petits plats" />
      <ul>
        <Link to={PATH.HOME}>Home</Link>
        <Link to={PATH.HOME}>Test</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
