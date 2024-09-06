"use client";
import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import styles from "@/assets/scss/components/homePageContent.module.scss";
import FilterCharacter from "./FilterCharacter";
import axios from "axios";

const HomeContent = ({ characters, info }) => {
	const [charactersList, setCharactersList] = useState(characters || []);
	const [searchInput, setSearchInput] = useState("");
	const [status, setStatus] = useState(null);
	const [gender, setGender] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadMoreInProgress, setIsLoadMoreInProgress] = useState(false);
	const [nextPageUrl, setNextPageUrl] = useState("");
	const [hasMore, setHasMore] = useState(true);

	const resetFilters = () => {
		setSearchInput("");
		setStatus(null);
		setGender(null);
		setCharactersList(characters);
	};

	useEffect(() => {
		// set initial next page url from the response
		if (info?.next) {
			setNextPageUrl(info?.next);
		}
	}, [info]);

	const loadMoreCharacters = async () => {
		if (!nextPageUrl) return;

		setIsLoadMoreInProgress(true);

		try {
			resetFilters();
			const response = await axios.get(nextPageUrl);
			const newCharacters = response.data.results;
			setCharactersList((prev) => [...prev, ...newCharacters]);
			setNextPageUrl(response.data.info.next);
			setHasMore(!!response.data.info.next);
		} catch (error) {
			console.error("Error :", error);
		} finally {
			setIsLoadMoreInProgress(false);
		}
	};

	return (
		<>
			<FilterCharacter
				resetFilters={resetFilters}
				setIsLoading={setIsLoading}
				charactersList={charactersList}
				setCharactersList={setCharactersList}
				defaultData={characters}
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				status={status}
				setStatus={setStatus}
				gender={gender}
				setGender={setGender}
			/>
			{isLoading ? (
				<div className={styles.loaderContainer}>
					<div className={styles.loader}></div>
				</div>
			) : (
				<>
					<div className={`${styles.characterGrid}`}>
						{charactersList?.map((character) => {
							return <CharacterCard key={character?.id} data={character} />;
						})}
					</div>
					{hasMore && (
						<div className={styles.loadMoreContainer}>
							<button
								className={styles.loadMoreButton}
								onClick={loadMoreCharacters}
								disabled={isLoadMoreInProgress}
							>
								{isLoadMoreInProgress ? "Loading..." : "Load More"}
							</button>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default HomeContent;
