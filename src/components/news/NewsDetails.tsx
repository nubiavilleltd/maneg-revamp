import { useParams } from "react-router-dom";
import { newsData } from "../../pages/News/data/newsData";
import styles from "./news.details.module.scss";
import { MdOutlineDateRange } from "react-icons/md";
import { News } from "../../types";
import CommentSection from "../comments/CommentSection";
import Transition from "../../utils/Transistion/Transition";

const NewsDetails = () => {
  const { newsID } = useParams();

  const currentNews: News | undefined = newsData.find(
    (news) => news.id === Number(newsID)
  );

  const relatedNews = newsData
    .filter((news) => news.id !== Number(newsID))
    .slice(0, 2);

  return (
    <section className={styles.wrapper}>
      <div className={styles["sections__wrap"]}>
        <div className={styles["left__section"]}>
          <h2>{currentNews?.title}</h2>
          <img
            src={currentNews?.image}
            alt={currentNews?.title}
            className={styles.image}
          />
          <article className={styles.content}>{currentNews?.content}</article>
        </div>
        <div className={styles["right__section"]}>
          <CommentSection />
          <div className={styles["right__cont"]}>
            <h2>News you might be interested in</h2>
            {relatedNews.map((news) => (
              <div>
                <div className={styles["flex__cont"]}>
                  <img
                    src={news.image}
                    alt={news.title}
                    className={styles.relatedImage}
                  />
                  <div>
                    <p className={styles["news__title"]}>{news.title}</p>
                    <article className={styles["news__content"]}>
                      {news.content.slice(0, 100)}...
                    </article>

                    <div className={styles["bottom__wrap"]}>
                      <div className={styles.wrap}>
                        <p className={styles.date}>
                          <MdOutlineDateRange size={14} />
                          <span style={{ fontSize: ".9rem" }}>{news.date}</span>
                        </p>
                      </div>
                      <span style={{ fontSize: ".9rem" }}>Read More</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TransitionNewsDetails = () => {
  return <Transition OgComponent={<NewsDetails />} />;
};

export default TransitionNewsDetails;
