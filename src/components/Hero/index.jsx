import styles from "./index.module.scss";
import data from "../data";

const Hero = () => {
	return (
		<div className={styles.hero}>
			{data.heroData.map((heroItem) => (
				<div
					className={styles.wrapper}
					key={heroItem.id}>
					<div className={styles.image}>
						<img
							src={heroItem.picture}
							alt="mojo"
						/>
					</div>
					<div className={styles.initials}>
						<h4>{heroItem.heading}</h4>
						<div>{heroItem.handClap}</div>
					</div>
					<div className={styles.mainHeading}>{heroItem.headingSecond}</div>
					<div className={styles.textShoot}>
						<h3>Latest Shots</h3>
						<div className={styles.arrowLine}>
							<div className={styles.arrow}>{heroItem.arrow}</div>
							<div className={styles.line}>{heroItem.line}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Hero;
