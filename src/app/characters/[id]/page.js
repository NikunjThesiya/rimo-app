import axiosInstance from "@/shared/lib/axios";
import styles from "@/assets/scss/pages/character.module.scss";
import CharacterContent from "@/shared/components/CharacterContent";
import { CHARCATER_STATIC_DETAILS } from "@/shared/constants";
import { notFound } from "next/navigation";

export default async function CharcterDetails({ params }) {
	// Fetch the Data on the Server Side. Its also called as Server Side Rendering...
	const response = await axiosInstance.get(`/character/${params?.id}`);
	const character = response?.data;
	// const character = CHARCATER_STATIC_DETAILS;
	console.log("character", character);

	if (!character) {
		notFound();
	}

	return (
		<div className={styles.character}>
			<div className={`custom-container ${styles.container}`}>
				<CharacterContent data={character} />
			</div>
		</div>
	);
}
