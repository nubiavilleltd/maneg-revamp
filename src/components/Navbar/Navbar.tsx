import styles from "./Navbar.module.scss";
import logo from "../../assets/logo.png";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollClasses = isScrolled
    ? `${styles.container} ${styles.scrolled}`
    : `${styles.container}`;

  return (
    <div className={scrollClasses}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Company Logo" />
      </Link>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/" className={isScrolled ? `${styles.scrolledLink}` : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={isScrolled ? `${styles.scrolledLink}` : ""}
            >
              About us
            </Link>
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
                  <Link
                    to="/directory"
                    className={styles["dropdown-content-2"]}
                  >
                    Member Directory
                  </Link>
                  <Link to="/benefits" className={styles["dropdown-content-3"]}>
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
            <Link
              to="/products"
              className={isScrolled ? `${styles.scrolledLink}` : ""}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isScrolled ? `${styles.scrolledLink}` : ""}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
