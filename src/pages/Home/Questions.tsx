import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Home.module.scss";
import { useState } from "react";

type Props = {
  id: number;
  question: string;
  answer: string;
};

const Questions = ({ id, question, answer }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const dropdownHandler = (id) => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={styles.service}>
      <div
        className={styles["service-div"]}
        onClick={() => dropdownHandler(id)}
      >
        <div>
          {isActive ? (
            <FontAwesomeIcon icon={faMinus} className={styles.icon} />
          ) : (
            <FontAwesomeIcon icon={faPlus} className={styles.icon} />
          )}
        </div>
        <h3 className={styles.question}>{question}</h3>
      </div>
      <p
        className={
          isActive ? `${styles.answer} ${styles.active}` : `${styles.answer}`
        }
      >
        {answer}
      </p>
    </div>
  );
};

export default Questions;
