import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactForm.module.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const handleFormSubmit = () => {
    console.log("submitted!");
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleFormSubmit}
      name="contact-form"
      id="contact-form"
    >
      <div className={styles.field}>
        <label htmlFor="name">What's your name?</label>
        <input type="text" placeholder="Type in your full name" id="name" />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">What's your email Address?</label>
        <input type="text" placeholder="example@example.com" id="email" />
      </div>
      <div className={styles.field}>
        <label htmlFor="company">
          What's the name of your company/organisation?
        </label>
        <input
          type="text"
          placeholder="Type in your company's name"
          id="company"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">What is your message?</label>
        <textarea
          name="message"
          id="message"
          cols={20}
          rows={5}
          placeholder="Type in your message"
        />
      </div>
      <Button type="submit" className={styles.button}>
        Send Message
        <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
      </Button>
    </form>
  );
};

export default ContactForm;
