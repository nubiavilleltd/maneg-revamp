import { motion } from "framer-motion";
import styles from "./Transition.module.scss";

type Props = {
  OgComponent: JSX.Element;
};

const Transition = ({ OgComponent }: Props) => {
  return (
    <>
      {OgComponent}
      <motion.div
        className={styles["slide-in"]}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={styles["slide-out"]}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
