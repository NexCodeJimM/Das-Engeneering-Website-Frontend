import React, { Component } from "react";
import { seo } from "../../../functions/useDocumentTitle";
import { images } from "../../../constants";
import { motion } from "framer-motion";

import { FullPageHeader, SectionHeader } from "../../../components";

export default class CustomerSatisfaction extends Component {
	componentDidMount() {
		seo({
			title: "Customer Satisfaction - Das Engeneering",
			metaDescription:
				"We place a high emphasis on customer satisfaction and are dedicated to meeting the needs and expectations of clients.",
		});
	}

	render() {
		return (
			<>
				<FullPageHeader image={images.customerSatisfaction} />

				<SectionHeader text1="Customer" text2="Satisfaction" />

				<motion.div
					className="expertise__desc"
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
					<p>
						At Das Engeneering, we place a high emphasis on customer
						satisfaction and are dedicated to meeting the needs and expectations
						of our clients. We understand that our clients are relying on us to
						deliver exceptional results, and we strive to exceed their
						expectations on every project.
					</p>

					<p>
						To achieve this level of customer satisfaction, we follow a
						customer-centric approach that includes:
					</p>

					<ul className="safety__bulletPoints">
						<li>
							Listening to our clients' needs and goals: We take the time to
							understand our clients' specific needs and goals, and we tailor
							our services to meet their unique requirements.
						</li>
						<li>
							Providing clear communication: We believe that open and
							transparent communication is key to building strong relationships
							with our clients. We keep our clients informed of project progress
							and any potential issues that may arise.
						</li>
						<li>
							Delivering high-quality work: We are committed to delivering
							construction projects that meet or exceed industry standards, and
							we use only the highest-quality materials and equipment to ensure
							that our work is of the highest caliber.
						</li>
						<li>
							Responding promptly to inquiries and concerns: We value our
							clients' time and make every effort to respond promptly to their
							inquiries and concerns.
						</li>
					</ul>

					<p>
						Overall, our commitment to customer satisfaction is a key factor in
						our ability to deliver successful construction projects for our
						clients.
					</p>
				</motion.div>
			</>
		);
	}
}
