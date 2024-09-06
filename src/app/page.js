import axiosInstance from "@/shared/lib/axios";
import styles from "@/assets/scss/pages/home.module.scss";
import { CHARACTERS_STATIC_DATA } from "@/shared/constants";
import HomeContent from "@/shared/components/HomePageContent";

export default async function Home() {
	// Fetch the Data on the Server Side. Its also called as Server Side Rendering...
	const response = await axiosInstance.get("/character");
	const characters = response?.data?.results;
	const info = response?.data?.info;
	// const characters = CHARACTERS_STATIC_DATA;
	console.log("characters", info);

	if (characters && characters?.length > 0) {
		return (
			<div className={styles.home}>
				<div className={`custom-container ${styles.container}`}>
					<HomeContent characters={characters} info={info} />
				</div>
			</div>
		);
	} else {
		return <div>OOPS! NO CHARACTERS FOUND</div>;
	}
}
