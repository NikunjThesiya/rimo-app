import React from "react";
import styles from "@/assets/scss/components/headerBanner.module.scss";
import { HEADER_BANNER_URL } from "@/shared/constants";

const HeaderBanner = () => {
	return (
		<div className={`${styles.headerBanner}`}>
			<div className={`custom-container ${styles.container}`}>
				💻 DEVELOPER PORTFOLIO -{" "}
				<a target="_blank" href={HEADER_BANNER_URL}>
					NIKUNJ THESIYA
				</a>
			</div>
		</div>
	);
};

export default HeaderBanner;
