import styles from "./Home.module.scss";
import Button from "../../components/UI/Button/Button";
// import heroImg from "../../assets/hero-image.jpg";
// import cacLogo from "../../assets/cac_logo.png";
// import manLogo from "../../assets/man_logo2 (1).png";
import aboutImg from "../../assets/about-hero-img.jpg";
import farmImg from "../../assets/farm (1).jpg";
import groupimg from "../../assets/group-img.png";
import hero from "../../assets/about-img-landscape.jpg";
import plant from "../../assets/plant.jpg";
// import logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";
import newsletterImg from "../../assets/newsletter.jpg";
import exportVideo from "../../assets/export.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleInfo,
  faCompassDrafting,
  faHammer,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Questions from "./Questions";
import { service } from "./service";
import CountUp from "react-countup";
import Newsletter from "./Newsletter/Newsletter";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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
            <Link to="/contact">
              <Button type="button" className={styles.circleBtn}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles["hero-image"]}>
          {/* <img src={heroImg} loading="lazy" alt="hero-image" /> */}
          <video autoPlay controls loop>
            <source src={exportVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* <div className={styles["hero-logo"]}>
        <ul>
          <li>
            <Link to="" className={styles.logo}>
              <img src={cacLogo} alt="Cooperate Assocation Council" />
            </Link>
          </li>
          <li>
            <Link to="" className={styles.logo}>
              <img src={manLogo} alt="Manufacturers Assocaition of Nigeria" />
            </Link>
          </li>
          <li>
            <Link to="" className={styles.logo}>
              <img
                src={logo}
                alt="Manufacturers Assocation of Nigeria Export Promotion Group"
              />
            </Link>
          </li>
          <li>
            <Link to="" className={styles.logo}>
              Nextportrade
            </Link>
          </li>
        </ul>
      </div> */}

      <section className={styles.support}>
        <div>
          <h1 className={styles["support-heading"]}>
            Our support for Nigerian Exporters
          </h1>

          <p className={styles["support-sub-heading"]}>
            Raising our members’ profiles is only one aspect of how we make
            MANEG membership essential for any business active in international
            trade. We provide a unique set of advantages and services that are
            only available to MANEG members and are geared to help Nigerian
            firms flourish in international trade.
          </p>

          <div className={styles["support-feature"]}>
            <ul>
              <li>
                <div>
                  <FontAwesomeIcon icon={faHammer} className={styles.feature} />
                  <p>Non oil Export Advocacy</p>
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className={styles.feature}
                  />
                  <p>Non oil Export Facilitation</p>
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faCompassDrafting}
                    className={styles.feature}
                  />
                  <p>Exhibition Design & Development</p>
                </div>
              </li>
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={styles.feature}
                  />
                  <p>Credible Importer sourcing</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.track}>
          <div className={styles["track-year"]}>
            <CountUp end={1972} duration={10} className={styles.count} />
            <p>Year Founded</p>
          </div>
          <div className={styles["track-associations"]}>
            <CountUp end={50} duration={10} className={styles.count} />
            <p>Associations</p>
          </div>
          <div className={styles["track-companies"]}>
            <CountUp end={1200} duration={10} className={styles.count} />
            <p>Companies/members</p>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.wrapper}>
          <div className={styles["about-image"]}>
            <img src={aboutImg} alt="about Home image" />
          </div>
          <div className={styles["about-description"]}>
            <h1>What's our Story ?</h1>
            <p>
              The Manufacturers Association of Nigeria Export Promotion Group –
              MANEG is a group of Nigerian manufacturers who have joined hands
              together to promote Nigerian non-oil exports. MANEG is the largest
              recognized body dedicated to non-oil export promotion.
            </p>
            <Button type="button" className={styles.button}>
              More Information
              <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles["services-header"]}>
          <h1>Services we offer</h1>
          <Button
            type="button"
            className={`${styles.button} ${styles.incentives}`}
          >
            Incentives
            <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
          </Button>
        </div>
        <div className={styles["services-main"]}>
          <div className={styles.serve}>
            {service.map((item) => (
              <Questions
                id={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
          <div className={styles.images}>
            <img
              src={farmImg}
              alt=""
              className={`${styles.image} ${styles.farmImg}`}
            />
            <img
              src={groupimg}
              alt=""
              className={`${styles.image} ${styles.groupImg}`}
            />
            <img
              src={plant}
              alt=""
              className={`${styles.image} ${styles.plant}`}
            />
            <img
              src={hero}
              alt=""
              className={`${styles.image} ${styles.hero}`}
            />
          </div>
        </div>
      </section>

      <section className={styles.trends}>
        <div className={styles["trends-container"]}>
          <div className={styles["trends-header"]}>
            <h3 className={styles["NandE"]}>News & Events</h3>
            <div className={styles["see-more"]}>
              <p>See more</p>
              <Button type="button" className={styles.circleBtn}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>
          <div className={styles["trend-carousel"]}>
            <div className={styles.news}>
              <div className={styles["news-image"]}>
                <img
                  src="https://images.pexels.com/photos/6000100/pexels-photo-6000100.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="First Page News"
                />
              </div>
              <div className={styles["news-desc"]}>
                <h5>
                  Alien Sightings Skyrocket Amidst Mysterious Crop Circle
                  Phenomenon in Kansas
                </h5>
                <p>
                  Description: In a small Kansas town, a series of otherworldly
                  events has left residents bewildered and conspiracy theories
                  spreading like wildfire. Reports of strange lights in the
                  night sky, unusual crop circle formations appearing overnight,
                  and eyewitness accounts of extraterrestrial beings have led to
                  a frenzy of excitement and fear among locals.
                </p>
              </div>
            </div>
            <div className={styles.news}>
              <div className={styles["news-image"]}>
                <img
                  src="https://images.pexels.com/photos/6262966/pexels-photo-6262966.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Second Page News"
                />
              </div>

              <div className={styles["news-desc"]}>
                <h5>
                  World Health Organization Confirms Existence of New
                  'Sleepless' Virus - Global Panic Ensues
                </h5>
                <p>
                  The World Health Organization (WHO) has issued a shocking
                  announcement, revealing the discovery of a previously unknown
                  and highly contagious virus dubbed the "Sleepless" virus.
                  According to WHO officials, the virus induces severe insomnia
                  and sleep deprivation in its victims, leading to a myriad of
                  physical and psychological symptoms.
                </p>
              </div>
            </div>
            <div className={`${styles.news} ${styles.event}`}>
              <div className={` ${styles["event-desc"]}`}>
                <p className={styles.date}>17</p>
                <p>Dec, 2022</p>
              </div>
              <div className={styles["news-image"]}>
                <img
                  src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="First Page Event"
                />
              </div>

              <div className={styles["news-desc"]}>
                <h5>
                  The Enchanted Garden: An Extravagant Festival Celebrating
                  Mythical Creatures
                </h5>
                <p>
                  Brace yourself for an otherworldly experience as "The
                  Enchanted Garden" festival descends upon a hidden valley
                  shrouded in mystery. This remarkable event promises to
                  transport attendees to a realm straight out of fairy tales and
                  folklore, where mythical creatures come to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.quote}>
        <blockquote>Be a part of a growing Nigerian Economy</blockquote>
      </section>
      <section className={styles.newsletter}>
        <div className={styles["newsletter-image"]}>
          <img src={newsletterImg} alt="about" />
        </div>
        <div className={styles["newsletter-content"]}>
          <h3>Join our Newsletter</h3>
          <Newsletter />
        </div>
      </section>
    </>
  );
};

export default Home;
