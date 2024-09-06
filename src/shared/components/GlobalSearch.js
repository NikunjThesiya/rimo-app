import React from "react";
import styles from "@/assets/scss/components/globalSearch.module.scss";
import SearchIcon from "@/assets/images/search.svg";
import Image from "next/image";

const GlobalSearch = ({ onChange, value, name }) => {
	return (
		<div className={styles.globalSearch}>
			<Image
				src={SearchIcon}
				alt="search icon"
				width={24}
				height={24}
				className={styles.searchIcon}
			/>
			<input
				name={name}
				type="text"
				className={styles.input}
				placeholder="Search..."
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default GlobalSearch;
