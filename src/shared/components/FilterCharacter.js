"use client";
import React, { useEffect, useState } from "react";
import styles from "@/assets/scss/components/filterCharacter.module.scss";
import GlobalSearch from "./GlobalSearch";
import CustomSelect from "./CustomSelect";
import { GENDER, STATUS } from "../constants";
import { debounce } from "../lib";
import axiosInstance from "../lib/axios";

const FilterCharacter = ({
	charactersList,
	resetFilters,
	setIsLoading,
	setCharactersList,
	defaultData,
	searchInput,
	setSearchInput,
	status,
	setStatus,
	gender,
	setGender,
}) => {
	const debouncedFilter = debounce(() => {
		fetchFilteredCharacters();
	}, 1000);

	const fetchFilteredCharacters = async () => {
		try {
			setIsLoading(true);
			let query = "";

			// query parameters based on search input status and gender
			if (searchInput) query += `&name=${searchInput}`;
			if (status) query += `&status=${status}`;
			if (gender) query += `&gender=${gender}`;

			const response = await axiosInstance.get(`/character/?${query}`);
			setCharactersList(response.data.results);
		} catch (error) {
			console.error("Error fetching filtered characters:", error);
			setCharactersList([]);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		debouncedFilter();
	}, [searchInput, status, gender]);

	return (
		<div className={styles.filterCharacterContainer}>
			<div className={styles.filterCharacter}>
				<h3>Search Your Favorite Character</h3>
				<GlobalSearch
					name="search"
					onChange={(e) => setSearchInput(e.target.value)}
					value={searchInput}
				/>
				<div className={styles.filters}>
					<div className={styles.left}>
						<CustomSelect
							value={status}
							options={STATUS}
							onChange={(e) => setStatus(e.target.value)}
							label="Status"
							name="status"
						/>
						<CustomSelect
							value={gender}
							options={GENDER}
							onChange={(e) => setGender(e.target.value)}
							label="Gender"
							name="gender"
						/>
					</div>
					<div className={styles.right}>
						<button onClick={resetFilters}>RESET</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterCharacter;
