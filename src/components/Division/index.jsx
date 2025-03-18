import styles from "./index.module.scss";
import data from "../data";

const Division = () => {
	return (
		<div className={styles.division}>
			<div class={styles.servicesHead}>
				<h2>
					Collaborate with brands and agencies <br />
					to create impactful results.
				</h2>
				<div class={styles.servicesBtn}>
					<h4>Services</h4>
				</div>
				<hr />
			</div>
			{/* Divs with the services icons and descriptions  */}
			<div class={styles.services}>
				{data.divisionIcons.map((divisionItem) => (
					<div
						class={styles.servicesWrapper}
						key={divisionItem.id}>
						<div class={styles.servicesImage}>
							<img
								src={divisionItem.image}
								alt="appimage"
							/>
						</div>
						<div class={styles.servicesHead}>
							<h3>{divisionItem.head}</h3>
						</div>
						<div class={styles.servicesParagraph}>
							<p>{divisionItem.paragraph}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Division;
