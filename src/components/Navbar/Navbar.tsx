import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Company Logo" />
      </Link>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li className={styles.dropdown}>
            <div>
              <div className={styles["dropdown-link"]}>
                <p>Membership</p>
                <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
              </div>
              <div className={styles["dropdown-content"]}>
                <div>
                  <Link to="" className={styles["dropdown-content-1"]}>
                    Become a Member
                  </Link>
                  <Link to="" className={styles["dropdown-content-2"]}>
                    Member Directory
                  </Link>
                  <Link to="" className={styles["dropdown-content-3"]}>
                    Member Benefits
                  </Link>
                  <Link to="" className={styles["dropdown-content-4"]}>
                    Member Resources
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.dropdown}>
            <div>
              <div className={styles["dropdown-link"]}>
                <p>News & Events</p>
                <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
              </div>
              <div className={styles["dropdown-content"]}>
                <div>
                  <Link to="/news">News</Link>
                  <Link to="/event">Events</Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="">Products</Link>
          </li>
          <li>
            <Link to="">Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
