import styles from "./index.module.scss";
import data from "../data";

const DivisionHeading = () => {
	return (
		<div className={styles.servicesHead}>
			<h2>
				Collaborate with brands and agencies to <br />
				create impactful results.
			</h2>
			<div className={styles.servicesBtn}>
				<h4>Services</h4>
			</div>
			<hr />
		</div>
	);
};

export default DivisionHeading;
