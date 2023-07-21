import { useState } from "react";
import styles from "./comments.module.scss";
import Button from "../UI/Button/Button";
import { comments } from "./data";

export default function CommentSection() {
  const [showCommentInput, setShowCommentInput] = useState(false);

  return (
    <section className={styles["comments__section"]}>
      <div className={styles.wrapper}>
        <h1>Comments ({comments.length})</h1>
        {!showCommentInput && (
          <div
            className={styles.shadow}
            onClick={() => setShowCommentInput(true)}
          >
            {!showCommentInput && (
              <span style={{ color: "#999999" }}>
                Type your comment here...
              </span>
            )}
          </div>
        )}

        {showCommentInput && (
          <div className={styles["shadow__sec"]}>
            <textarea
              cols={30}
              rows={5}
              placeholder=" Type your comment here..."
              className={styles.textarea}
            />
            <div className={styles.buttons}>
              <Button
                type="button"
                className={styles["cancel__btn"]}
                onClick={() => setShowCommentInput(false)}
              >
                Cancel
              </Button>
              <Button type="button" className={styles["send__btn"]}>
                Send
              </Button>
            </div>
          </div>
        )}

        <div className={styles.comments}>
          {comments.map((comment) => (
            <main className={styles.main}>
              <div className={styles["comment__comment"]}>
                <img
                  src={comment.avatar}
                  alt={comment.username}
                  className={styles.avatar}
                />

                <div>
                  <p style={{ fontWeight: 600 }}>{comment.username}</p>
                  <p style={{ color: "#999" }}>{comment.createdAt}</p>
                </div>
              </div>
              <p style={{ fontWeight: 400, marginTop: ".4rem" }}>
                {comment.message}
              </p>
            </main>
          ))}
        </div>
      </div>
    </section>
  );
}
