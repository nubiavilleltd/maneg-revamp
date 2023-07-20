import styles from "./Home.module.scss";
import Button from "../../components/UI/Button/Button";
import heroImg from "../../assets/hero-image.jpg";

const Home = () => {
  return (
    <>
      <div className={styles["hero-section"]}>
        <div>
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
          </Button>
        </div>
        <div className={styles["hero-image"]}>
          <img src={heroImg} alt="hero-image" />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Home;
