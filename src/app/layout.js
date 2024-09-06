import { Poppins } from "next/font/google";
import "../assets/scss/global.scss";
import Layout from "@/shared/components/layout";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "RICK & MORTY",
	description: "BY NIKUNJ THESIYA",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Layout>
					{children}
				</Layout>
			</body>
		</html>
	);
}
