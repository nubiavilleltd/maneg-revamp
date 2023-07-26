
import styles from "../Home/Home.module.scss";
import Button from "../../components/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
const Products = () =>{
return<>
<div className={styles["hero-section"]}>
    <div className={styles["hero-first-col"]}>
          <h1 className={styles["hero-heading"]}>
            Sustainable Development & Job creation
          </h1>
          <p className={styles["hero-sub-heading"]}>
            The importance of organized private sector groups in the growth and
            development of Nigeria’s economy cannot be overstated. The
            Manufacturers Association of Nigeria’s Export Promotion Group
            represents the non-oil interests of private sector organizations
            throughout the country.
          </p>
          <Button type="button" className={styles.button}>
            Become a member
            <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
          </Button>
          <div className={styles.talk}>
            Let's Talk
            <Button type="button" className={styles.circleBtn}>
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </div>
        </div>
        </div>
</>
}

export default Products