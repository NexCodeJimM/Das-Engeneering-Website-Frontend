import React, { Component } from "react";
import { seo } from "../../../functions/useDocumentTitle";
import { images } from "../../../constants";
import { motion } from "framer-motion";

import { FullPageHeader, SectionHeader } from "../../../components";

export default class InnovativeSolutions extends Component {
	componentDidMount() {
		seo({
			title: "Innovative Solutions - Das Engeneering",
			metaDescription:
				"We are committed to staying up-to-date on the latest construction technologies and techniques, and is able to offer innovative solutions to complex construction challenges",
		});
	}

	render() {
		return (
			<>
				<FullPageHeader image={images.innovativeSolutionsFull} />

				<SectionHeader text1="Innovative" text2="Solutions" />

				<motion.div
					className="expertise__desc"
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
					<p>
						At our company, we are committed to staying up-to-date on the latest
						construction technologies and techniques, and to offering innovative
						solutions to complex construction challenges. We believe that this
						approach helps us to deliver the best possible results for our
						clients and to stay ahead of the competition.
					</p>

					<p>
						To achieve this level of innovation, we invest in ongoing training
						and development for our team members, and we encourage them to think
						creatively and to come up with new ideas and approaches. We also
						stay abreast of industry trends and developments, and we regularly
						review and assess new technologies and techniques that may be
						applicable to our construction projects.
					</p>

					<p>
						In addition to our internal efforts, we also work closely with our
						clients to understand their unique needs and challenges, and to
						develop custom solutions that meet their specific requirements.
						Whether we are working on a residential, commercial, or industrial
						project, we are always looking for ways to push the boundaries and
						to deliver results that exceed our clients' expectations.
					</p>

					<p>
						Overall, our commitment to offering innovative solutions is a key
						factor in our ability to deliver successful construction projects
						for our clients.
					</p>
				</motion.div>
			</>
		);
	}
}
