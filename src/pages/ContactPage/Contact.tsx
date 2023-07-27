import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm/ContactForm";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// import { VscArrowDown } from "react-icons/vsc";
import ReactCurvedText from "react-curved-text";
import Transition from "../../utils/Transistion/Transition";

const Contact = () => {
  return (
    <>
      <div className={styles["contact-wrapper"]}>
        <div className={styles["contact-header"]}>
          <div>
            <header className={styles.header}>
              We'd love to hear from you !
            </header>
            <p className={styles["contact-desc"]}>
              If you have any question or comment on our membership or you’re
              interested in learning more about the service, we’re here to help.
            </p>
          </div>
          <div className={styles["spinner-container"]}>
            {/* <ReactCurvedText
              width="257"
              height="270"
              cx="131"
              cy="144"
              rx="99"
              ry="99"
              startOffset="0"
              reversed={false}
              text="Get in touch - Get in touch - Get in touch - Get in touch -"
              textProps={{ style: { fontSize: "16px" } }}
              textPathProps={null}
              tspanProps={{ dy: "-5" }}
              ellipseProps={null}
              svgProps={{ style: { transform: "rotate(118deg)" } }}
              className={styles.curved}
            /> */}
            <ReactCurvedText
              width="194"
              height="182"
              cx="99"
              cy="87"
              rx="87"
              ry="87"
              startOffset="42"
              reversed={false}
              text="Get in touch - Get in touch - Get in touch - Get in"
              textProps={{ style: { fontSize: "16" } }}
              textPathProps={null}
              tspanProps={{ dy: "0" }}
              ellipseProps={null}
              svgProps={{
                style: {
                  transform: "rotate(129deg)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                },
                className: `${styles.curved}`,
              }}
            />
            {/* <ReactCurvedText
              width="137"
              height="137"
              cx="68"
              cy="68"
              rx="61"
              ry="61"
              startOffset="24"
              reversed={false}
              text="Get in touch - Get in touch - Get in touch - Get in touch - Get-"
              textProps={{ style: { fontSize: "18" } }}
              textPathProps={null}
              tspanProps={{ dy: "0" }}
              ellipseProps={null}
              svgProps={{ style: { transform: "rotate(129deg)" } }}
            /> */}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className={styles["contact-icon"]}
            />
          </div>
        </div>
        <div className={styles["contact-content"]}>
          <div className={styles["contact-form"]}>
            <ContactForm />
          </div>
          <div className={styles.details}>
            <div className={styles["details-text"]}>
              <div className={styles.phone}>
                <p>Call us</p>
                <a href="tel=+2347066454595">+234 706 645 4595</a>
                <a href="tel=+1-613-555-0105">+1-613-555-0105</a>
              </div>
              <div className={styles.address}>
                <p>Headquaters</p>
                <p>77 Obafemi Awolowo Way, Oba Akran 101233, Ikeja, Lagos</p>
              </div>
              <div className={styles.social}>
                <Link to="www.facebook.com">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#0f67ff" }}
                    className={styles["social-icon"]}
                  />
                </Link>

                <Link to="www.twitter.com">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ color: "#196af5" }}
                    className={styles["social-icon"]}
                  />
                </Link>

                <Link to="www.instagram.com">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={`${styles["social-icon"]} ${styles.instagram}`}
                  />
                </Link>
              </div>
            </div>
            <div className={styles["details-map"]}>
              <iframe
                style={{ border: "0", width: "363px", height: "200px" }}
                className={styles.map}
                src="https://maps.google.com/maps?hl=en&amp;q=77,%20Obafemi%20Awolowo%20Way,%20Ikeja,%20Lagos%20Lagos+(77,%20Obafemi%20Awolowo%20Way,%20Ikeja,%20Lagos)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TransitionContact = () => {
  return <Transition OgComponent={<Contact />} />;
};

export default TransitionContact;
