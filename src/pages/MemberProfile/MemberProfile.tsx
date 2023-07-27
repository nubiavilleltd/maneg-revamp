import Transition from "../../utils/Transistion/Transition";
import styles from "./MemberProfile.module.scss";

const MemberProfile = () => {
  return <div className={styles.member}>MemberProfile</div>;
};

const TransitionMemberProfile = () => {
  return <Transition OgComponent={<MemberProfile />} />;
};

export default TransitionMemberProfile;
