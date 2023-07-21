import { newsData } from "./data/newsData";
import styles from "./news.module.scss";
import { Link } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { useEffect, useState } from "react";

export default function News() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allNews, setAllNews] = useState(newsData);

  useEffect(() => {
    const filteredNews = newsData.filter((news) =>
      news.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setAllNews(filteredNews);
  }, [searchQuery]);

  return (
    <section className={styles.news}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <p style={{ fontWeight: "700", fontSize: "1.3rem" }}>Latest News</p>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.search}
            placeholder="Search by title..."
          />
        </div>

        {searchQuery && (
          <>
            <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
              Seach results for{" "}
              <span style={{ color: "#21976f" }}>'{searchQuery}' </span>
              <span>({allNews.length} results)</span>
            </h3>
          </>
        )}

        {searchQuery && allNews.length === 0 ? (
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h2>No news found. Try searching something else.</h2>
          </div>
        ) : (
          <div className={styles["cards__wrapper"]}>
            {allNews.map((news) => (
              <Link
                to={`/news/${news.id}`}
                key={news.id}
                className={styles["card__container"]}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className={styles.image}
                />
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
        )}
      </div>
    </section>
  );
}
