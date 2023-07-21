import { newsData } from "./data/newsData";
import styles from "./news.module.scss";

export default function News() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <p>Latest News</p>
        <select>
          <option value="" selected disabled>
            Filter By
          </option>
        </select>
      </div>

      <div className={styles["cards__wrapper"]}>
        {newsData.map((news) => (
          <div key={news.id}>
            <img src="" alt="" />
            <p>{news.title}</p>
            <p>{news.content}</p>
            <p>{news.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
