import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href="" className={styles.logo}>
        <img src={logo} alt="Company Logo" />
      </a>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li className={styles.dropdown}>
            <div>
              <div className={styles["dropdown-link"]}>
                <p>Membership</p>
                <FontAwesomeIcon icon={faCaretDown} className={styles.icon} />
              </div>
              <div className={styles["dropdown-content"]}>
                <div>
                  <a href="" className={styles["dropdown-content-1"]}>
                    Become a Member
                  </a>
                  <a href="" className={styles["dropdown-content-2"]}>
                    Member Directory
                  </a>
                  <a href="" className={styles["dropdown-content-3"]}>
                    Member Benefits
                  </a>
                  <a href="" className={styles["dropdown-content-4"]}>
                    Member Resources
                  </a>
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
                  <a href="">News</a>
                  <a href="">Events</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
