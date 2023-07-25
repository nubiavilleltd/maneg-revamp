import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles["footer-container"]}>
        <div className={styles["first-row"]}>
          <div className={styles["first-col"]}>
            <div className={styles.logo}>
              <Link to="">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className={styles["footer-desc"]}>
              <p>Be a part of a growing Nigerian Economy</p>
            </div>
            <div className={styles.social}>
              <ul>
                <li>
                  <Link to="www.facebook.com">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "#0f67ff" }}
                      className={styles["social-icon"]}
                    />
                  </Link>
                </li>
                <li>
                  <Link to="www.twitter.com">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ color: "#196af5" }}
                      className={styles["social-icon"]}
                    />
                  </Link>
                </li>
                <li>
                  <Link to="www.instagram.com">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={`${styles["social-icon"]} ${styles.instagram}`}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["second-col"]}>
            <ul>
              <li>
                <Link to="" className={styles.link}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="" className={styles.link}>
                  Become a member
                </Link>
              </li>
              <li>
                <Link to="" className={styles.link}>
                  Member Services
                </Link>
              </li>
              <li>
                <Link to="" className={styles.link}>
                  Member Resources
                </Link>
              </li>
              <li>
                <Link to="" className={styles.link}>
                  Member Directory
                </Link>
              </li>
              <li>
                <Link to="" className={styles.link}>
                  News
                </Link>
              </li>
              <li>
                <Link to="" className={styles.link}>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/products" className={styles.link}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="" className={styles.link}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles["third-col"]}>
            <div className={styles.contact}>
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={styles["contact-icon"]}
                />
                <Link to="mailto:info@maneg.org" className={styles.mail}>
                  info@maneg.org
                </Link>
              </div>
            </div>
            <div className={styles.contact}>
              <div>
                <FontAwesomeIcon
                  icon={faLocation}
                  className={styles["contact-icon"]}
                />
                <p>77 Obafemi Awolowo Way, Oba Akran 101233, Ikeja, Lagos</p>
              </div>
            </div>
            <div className={styles.contact}>
              <div>
                <FontAwesomeIcon
                  icon={faPhone}
                  className={styles["contact-icon"]}
                />
                <p>0706 645 4595</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; 2022 MANEG, All Rights Reserved | Privacy Policy, Terms of
          Service & Cookie settings
        </div>
      </div>
    </section>
  );
};

export default Footer;
