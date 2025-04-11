import styles from "./index.module.scss";
import data from "../data";

const Section = () => {
	return (
		<div className={styles.section}>
			{data.sectionData.map((sectionItem) => (
				<div
					key={sectionItem.id}
					className={styles.orderCard}>
					<div className={styles.orderImage}>
						<img
							src={sectionItem.image}
							alt=""
						/>
					</div>
					<div className={styles.orderHeading}>
						<h1>Tell me about your next project</h1>
					</div>
					<div className={styles.orderContact}>
						<div className={styles.orderEmail}>
							<div className={styles.sectionImg}>📧</div>
							<a href="">Email me</a>
						</div>
						<div className={styles.orderWhatsup}>
							<a href="">WhatsApp</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Section;
