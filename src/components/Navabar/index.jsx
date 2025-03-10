import styles from "./index.module.scss";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navStart}>
				<div className={styles.copyEmail}>
					<div className={styles.copyEmail}>lukan.hotmail.co.uk</div>
					<div className={styles.copy}>Copy</div>
				</div>
				<div className={styles.cv}>CV</div>
			</div>
			<div className={styles.navEnd}>
				<div className={styles.links}>Linkedin</div>
				<div className={styles.links}>/</div>
				<div className={styles.links}>Dribble</div>
				<div className={styles.links}>/</div>
				<div className={styles.links}>Instagram</div>
			</div>
		</div>
	);
};

export default Navbar;
