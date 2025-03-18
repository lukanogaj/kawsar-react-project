import styles from "./index.module.scss";

const Division = () => {
	return (
		<div className={styles.divison}>
			<div class="servicesHead">
				<h2>
					Collaborate with brands and agencies <br />
					to create impactful results.
				</h2>
				<div class="servicesBtn">
					<h4>Services</h4>
				</div>
				<hr />
			</div>
			{/* Divs with the services icons and descriptions  */}

			<div class="services">
				<div class="servicesWrapper">
					<div class="services_image">
						<img
							src="./images/Icons/uiux.svg"
							alt=""
						/>
					</div>
					<div class="servicesHead">
						<h3>UX & UI</h3>
					</div>
					<div class="servicesParagraph">
						<p>
							Designing interfaces that are intuitive, efficient, and enjoyable
							to use.
						</p>
					</div>
				</div>
				<div class="servicesWrapper">
					<div class="services_image">
						<img
							src="./images/Icons/app.svg"
							alt=""
						/>
					</div>
					<div class="servicesHead">
						<h3>Web & Mobile App</h3>
					</div>
					<div class="servicesParagraph">
						<p>
							Transforming Ideas into exceptional web and mobile app
							experiences.
						</p>
					</div>
				</div>
				<div class="servicesWrapper">
					<div class="servicesImage">
						<img
							src="./images/Icons/design.svg"
							alt=""
						/>
					</div>
					<div class="servicesHead">
						<h3>Design & Creative</h3>
					</div>
					<div class="servicesParagraph">
						<p>
							Crafting visually stunning designs that connect with your
							audience.
						</p>
					</div>
				</div>
				<div class="servicesWrapper">
					<div class="servicesImage">
						<img
							src="./images/Icons/development.svg"
							alt=""
						/>
					</div>
					<div class="servicesHead">
						<h3>Development</h3>
					</div>
					<div class="servicesParagraph">
						<p>
							Bringing your vision to life with the latest technology and design
							trends.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Division;
