import React, { Component } from "react";
import { seo } from "../../../functions/useDocumentTitle";
import { images } from "../../../constants";
import { motion } from "framer-motion";

import { FullPageHeader, SectionHeader } from "../../../components";

import "./Safety.scss";

export default class Safety extends Component {
	componentDidMount() {
		seo({
			title: "Safety - Das Engeneering",
			metaDescription:
				"We have a strong commitment to safety and take all necessary precautions to protect workers and clients during the construction process.",
		});
	}

	render() {
		return (
			<>
				<FullPageHeader image={images.safety} />

				<SectionHeader text2="Safety" />

				<motion.div
					className="expertise__desc"
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
					<p>
						At Das Engeneering, we understand that safety is of the utmost
						importance in the construction industry. We are committed to
						maintaining a safe work environment for our team members, clients,
						and anyone else who may be affected by our construction projects.
					</p>

					<p>
						To ensure the safety of all parties involved, we follow a
						comprehensive safety program that includes:
					</p>

					<ul className="safety__bulletPoints">
						<li>
							Providing our team members with the training and equipment they
							need to work safely.
						</li>
						<li>
							Establishing clear safety protocols and procedures that must be
							followed on all construction sites.
						</li>
						<li>
							Conducting regular safety inspections and audits to identify
							potential hazards and implement corrective actions.
						</li>
						<li>
							Encouraging a culture of safety throughout the company, in which
							everyone is responsible for promoting and maintaining a safe work
							environment.
						</li>
					</ul>

					<p>
						In addition to our internal safety measures, we also work closely
						with our clients to ensure that their safety needs are met. We take
						all necessary precautions to protect workers and clients during the
						construction process and are prepared to respond to any safety
						incidents that may occur.
					</p>

					<p>
						Overall, our commitment to safety is a top priority and is essential
						to the success of our construction projects.
					</p>
				</motion.div>
			</>
		);
	}
}
