import logo from "../assets/logo.png";
import styles from "../style/nav_bar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navBar_container}>
      <div className={styles.containerImg}>
        <img src={logo} alt="Logo HelpPet" />
        <p>HelpPet</p>
      </div>

      <ul className={styles.containerList}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre nós</Link>
        </li>
        <li>
          <Link to="/services">Serviços</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
