import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Newsletter.module.scss";
import Button from "../../../components/UI/Button/Button";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const handleNewsletterSubscription = () => {
    console.log("subscribe!");
  };

  return (
    <form
      onSubmit={handleNewsletterSubscription}
      name="newsletter"
      id="newsletter"
      className={styles["newsletter-form"]}
    >
      <label htmlFor="firstName">First Name</label>
      <input type="text" placeholder="Enter your firstName" id="firstName" />
      <label htmlFor="LastName">Last Name</label>
      <input type="text" placeholder="Enter your lastName" id="LastName" />
      <label htmlFor="emailAddress">Email Address</label>
      <input
        type="email"
        placeholder="Enter your Email address"
        id="emailAddress"
      />
      <div className={styles.checkbox}>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">
          Do you agree and accept the <Link to="">terms and condition</Link>
        </label>
      </div>
      <Button type="submit" className={styles.submit}>
        Subscribe{" "}
        <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
      </Button>
    </form>
  );
};

export default Newsletter;
