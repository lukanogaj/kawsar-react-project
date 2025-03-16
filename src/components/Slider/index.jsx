import styles from "./index.module.scss";
import data from "../data";
import Slider from "react-infinite-logo-slider";

const SliderLogos = () => {
	return (
		<div className={styles.slider}>
			<div className={styles.sliderTrack}>
				{data.floatingIcons.map((slideItem) => (
					<div
						className={styles.slide}
						key={slideItem.id}>
						{" "}
						<img
							src={slideItem.image}
							alt="icons"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default SliderLogos;
