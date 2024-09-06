import React from "react";
import styles from "@/assets/scss/components/loadingScreen.module.scss";

const LoadingScreen = () => {
	return (
		<div className={styles.loadingScreen}>
			<div className={styles.loader}></div>
		</div>
	);
};

export default LoadingScreen;
