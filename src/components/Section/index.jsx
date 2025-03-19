import styles from "./index.module.scss";
import data from "../data";

const Section = () => {
	return (
		<div class="section">
			<div class="order_card">
				<div class="order_image">
					<img
						src="./images/Icons/handsshake.svg"
						alt=""
					/>
				</div>
				<div class="order_heading">
					<h1>Tell me about your next project</h1>
				</div>
				<div class="order_contact">
					<div class="order_email">
						<div>📧</div>
						<div>Email me</div>
					</div>
					<div class="order_whatsup">
						<h4>WhatsApp</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
