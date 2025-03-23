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
							<div>Email me</div>
						</div>
						<div className={styles.orderWhatsup}>
							<h4>WhatsApp</h4>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Section;
