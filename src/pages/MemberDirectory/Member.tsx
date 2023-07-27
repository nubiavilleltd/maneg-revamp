import { Link } from "react-router-dom";
import styles from "./MemberDirectory.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  index: number;
  logo: string;
  address: string;
  company: string;
  description: string;
  id: number;
};

const Member = ({ index, logo, address, company, description, id }: Props) => {
  return (
    <>
      <Link to={`/directory/${id}`} className={styles["individual-member"]}>
        <div>{index + 1}</div>
        <img src={logo} className={styles["member-logo"]} />
        <div className={styles["member-details"]}>
          <p className={styles["member-name"]}>
            {company}{" "}
            <span className={styles["member-address"]}>{address}</span>
          </p>
          <p className={styles["member-desc"]}>{description}</p>
        </div>
        <div className={styles.icons}>
          <Link to="http://www.facebook.com">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#0f67ff" }}
              className={styles["member-social-icon"]}
            />
          </Link>
          <Link to="http://www.twitter.com">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#196af5" }}
              className={styles["member-social-icon"]}
            />
          </Link>
          <Link to="http://www.instagram.com">
            <FontAwesomeIcon
              icon={faInstagram}
              className={`${styles["member-social-icon"]} ${styles.instagram}`}
            />
          </Link>
        </div>
      </Link>
    </>
  );
};

export default Member;
