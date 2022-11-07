import { useAppSelector } from "@/customHooks/useApp";

import styles from "./LoadingOverlay.module.scss";

const LoadingOverlay = () => {
  const loadingState = useAppSelector((state) => state.loading);

  if (!loadingState.isActive) return null;

  return (
    <div className="overlay">
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
