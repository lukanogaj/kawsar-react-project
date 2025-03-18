import styles from "./index.module.scss";
import data from "../data";
import DivisionHeading from "../DIvisionHeading";

const Division = () => {
	return (
		<div className={styles.division}>
			<DivisionHeading />

			{/* Divs with the services icons and descriptions  */}
			<div className={styles.services}>
				{data.divisionIcons.map((divisionItem) => (
					<div
						className={styles.servicesWrapper}
						key={divisionItem.id}>
						<div className={styles.servicesImage}>
							<img
								src={divisionItem.image}
								alt="appimage"
							/>
						</div>
						<div className={styles.servicesHead}>
							<h3>{divisionItem.head}</h3>
						</div>
						<div className={styles.servicesParagraph}>
							<p>{divisionItem.paragraph}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Division;
