"use client";

import React from "react";
import styles from "@/assets/scss/components/characterCard.module.scss";
import Link from "next/link";
import { ROUTES } from "../constants/allRoutes";

const CharacterCard = ({ data }) => {
	// console.log("CHAR DATA", data)
	return (
		<div className={styles.characterCard}>
			<Link
				href={data?.id ? ROUTES.characterDetails(data?.id) : "#"}
				className={styles.cardLink}
			/>

			<div className={styles.imageContainer}>
				<img src={data?.image} alt={data?.name} />
			</div>
			<div className={styles.content}>
				<span className={styles.badge}>{data?.gender || "UNKNOWN"}</span>
				<h3 className={styles.characterName}>{data?.name}</h3>
				<p className={styles.status}>
					<span className={styles.badge}>{data?.status || "UNKNOWN"}</span> -{" "}
					{data?.species || "UNKNOWN"}
				</p>
				<p className={styles.location}>
					<span>Location</span> : {data?.location?.name || "UNKNOWN"}
				</p>
				<p className={styles.type}>
					<span>Type</span> : {data?.type || "UNKNOWN"}
				</p>
			</div>
		</div>
	);
};

export default CharacterCard;
