import styles from "./index.module.scss";
import trademark from "../images/Icons/trademark.svg";
const Footer = () => {
	return (
		<div className={styles.footer}>
			<hr />
			<div className={styles.footerSection}>
				<div className={styles.trademark}>
					<div className={styles.footerImg}>
						<img
							src={trademark}
							alt="Trademark"
						/>
					</div>
					<h3>2024 All rights reserved</h3>
				</div>
				<div className={styles.footerLinks}>
					<div className={styles.links}>
						<a href="">Linkedin</a>
					</div>
					<div className={styles.links}>/</div>
					<div className={styles.links}>
						<a href="">Dribble</a>
					</div>
					<div className={styles.links}>/</div>
					<div className={styles.links}>
						<a href="">Instagram</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
