import styles from "./index.module.scss";
import data from "../data";

const FloatingIcons = () => {
	return (
		<div className={styles.floatingIcons}>
			{data.floatingIcons.map((floatingItem) => (
				<div className={styles.icons}>
					<img
						src={floatingItem.image}
						alt="icons"
					/>
				</div>
			))}
		</div>
	);
};

export default FloatingIcons;
