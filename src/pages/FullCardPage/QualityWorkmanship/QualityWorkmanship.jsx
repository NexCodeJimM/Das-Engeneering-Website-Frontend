import React, { Component } from "react";
import { seo } from "../../../functions/useDocumentTitle";
import { images } from "../../../constants";
import { motion } from "framer-motion";

import { FullPageHeader, SectionHeader } from "../../../components";

export default class QualityWorkmanship extends Component {
	componentDidMount() {
		seo({
			title: "Quality Workmanship - Das Engeneering",
			metaDescription:
				"We are committed to delivering high-quality work that meets or exceeds industry standards.",
		});
	}

	render() {
		return (
			<>
				<FullPageHeader image={images.qualityWorkFull} />

				<SectionHeader text1="Quality" text2="Workmanship" />

				<motion.div
					className="expertise__desc"
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
					<p>
						At our company, we take great pride in the quality of our work and
						are committed to delivering construction projects that meet or
						exceed industry standards. We believe that high-quality workmanship
						is essential to the success of every project, and we go to great
						lengths to ensure that our work is of the highest caliber.
					</p>

					<p>
						To achieve this level of quality, we follow a rigorous process that
						includes careful planning and preparation, the use of top-quality
						materials and equipment, and strict quality control measures. We
						also invest in the training and development of our team members,
						ensuring that they have the skills and knowledge necessary to
						deliver top-quality work.
					</p>

					<p>
						In addition to meeting industry standards, we also strive to exceed
						our clients' expectations. We understand that our clients are
						relying on us to deliver exceptional results, and we are dedicated
						to delivering projects that meet their specific needs and goals.
					</p>

					<p>
						Overall, our commitment to quality workmanship is a key factor in
						our ability to deliver successful construction projects for our
						clients.
					</p>
				</motion.div>
			</>
		);
	}
}
