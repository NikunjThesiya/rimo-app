import React from "react";
import styles from "@/assets/scss/components/notFoundScreen.module.scss";
import Link from "next/link";
import { ROUTES } from "../constants/allRoutes";

const NotFoundScreen = () => {
	return (
		<div className={styles.loadingScreen}>
			<h1>404</h1>
			<p>OOPS! PAGE NOT FOUND</p>
			<Link className={styles.button} href={ROUTES.home}>
				Go to Home
			</Link>
		</div>
	);
};

export default NotFoundScreen;
