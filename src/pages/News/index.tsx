import { newsData } from "./data/newsData";
import styles from "./news.module.scss";
import { Link } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";

export default function News() {
  return (
    <section className={styles.news}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p style={{ fontWeight: "700", fontSize: "1.3rem" }}>Latest News</p>
          <select className={styles.select}>
            <option value="" selected disabled>
              Filter By
            </option>
          </select>
        </div>

        <div className={styles["cards__wrapper"]}>
          {newsData.map((news) => (
            <Link
              to={`/news/${news.id}`}
              key={news.id}
              className={styles["card__container"]}
            >
              <img src={news.image} alt={news.title} className={styles.image} />
              <div className={styles["content__wrap"]}>
                <p className={styles.title}>{news.title}</p>
                <article className={styles.content}>
                  {news.content.slice(0, 130)}...
                  <span style={{ color: "#21976f", fontWeight: "#700" }}>
                    Read More
                  </span>
                </article>
                <p className={styles.date}>
                  <MdOutlineDateRange size={20} />
                  <span> {news.date}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
