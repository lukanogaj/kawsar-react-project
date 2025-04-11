import styles from "./index.module.scss";
import data from "../data";
import { useState } from "react";

const Navbar = () => {
	// Handle click for the copy email button
	const [isCopy, setIsCopy] = useState(true);
	const handleCopy = () => {
		setIsCopy(!isCopy);
		// after 2 second reset the isSubmitting state
		setTimeout(() => {
			setIsCopy(true);
		}, 5000);
	};
	return (
		<div className={styles.navbar}>
			{/* Navbar  start map with the items  */}
			{data.navbarStar.map((navitem) => (
				<div
					className={styles.navStart}
					key={navitem.id}>
					<div className={styles.copyEmail}>
						<div className={styles.copyEmail}>{navitem.email} </div>
						<div
							className={styles.copy}
							onClick={handleCopy}>
							{isCopy ? "Copy" : "Copied!"}{" "}
						</div>
					</div>
					<div className={styles.cv}>{navitem.cv}</div>
				</div>
			))}

			{/*  Navbar end with the items */}
			{data.navbarEnd.map((linkitem) => (
				<div
					className={styles.navEnd}
					key={linkitem.id}>
					<div className={styles.links}>{linkitem.linkedin}</div>
					<div className={styles.links}>{linkitem.slash}</div>
					<div className={styles.links}>{linkitem.dribble}</div>
					<div className={styles.links}>{linkitem.slash}</div>
					<div className={styles.links}>{linkitem.instagram}</div>
				</div>
			))}
		</div>
	);
};

export default Navbar;
