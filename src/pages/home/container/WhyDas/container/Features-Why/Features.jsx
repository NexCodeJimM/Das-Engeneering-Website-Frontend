import React from "react";
import { images } from "../../../../../../constants";
import { Card } from "../../../../../../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Features.scss";

const Features = () => {
	return (
		<>
			<motion.div
				className="app__features-main-container"
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.25, ease: "easeInOut" }}
			>
				<Link to="/expertise">
					<Card
						title="Expertise"
						description="Our company has a team of experienced professionals who are knowledgeable about all aspects of construction. This includes planning and design, as well as execution and project management."
						img={images.experise}
					/>
				</Link>

				<Link to="/quality-workmanship">
					<Card
						title="Quality Workmanship"
						description="We are committed to delivering high-quality work that meets or exceeds industry standards."
						img={images.qualityWork}
					/>
				</Link>

				<Link to="/safety">
					<Card
						title="Safety"
						description="We have a strong commitment to safety and take all necessary precautions to protect workers and clients during the construction process."
						img={images.safety}
					/>
				</Link>

				<Link to="/versatility">
					<Card
						title="Versatility"
						description="Our company can handle a wide range of construction projects, including residential, commercial, and industrial projects of various sizes and complexities."
						img={images.versatile}
					/>
				</Link>

				<Link to="/customer-satisfaction">
					<Card
						title="Customer Satisfaction"
						description="We place a high emphasis on customer satisfaction and are dedicated to meeting the needs and expectations of clients."
						img={images.customerSatisfaction}
					/>
				</Link>

				<Link to="/innovative-solutions">
					<Card
						title="Innovative Solutions"
						description="We are committed to staying up-to-date on the latest construction technologies and techniques, and is able to offer innovative solutions to complex construction challenges."
						img={images.innovativeSolutions}
					/>
				</Link>
			</motion.div>
		</>
	);
};

export default Features;
