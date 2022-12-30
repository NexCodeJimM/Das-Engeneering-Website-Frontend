import React, { Component } from "react";
import { seo } from "../../../functions/useDocumentTitle";
import { images } from "../../../constants";
import { motion } from "framer-motion";

import { FullPageHeader, SectionHeader } from "../../../components";

import "./Expertise.scss";

export default class Expertise extends Component {
	componentDidMount() {
		seo({
			title: "Our Expertise - Das Engeneering",
			metaDescription:
				"Our company has a team of experienced professionals who are knowledgeable about all aspects of construction. This includes planning and design, as well as execution and project management.",
		});
	}

	render() {
		return (
			<>
				<FullPageHeader image={images.experise} />

				<SectionHeader text1="Our" text2="Expertise" />

				<motion.div
					className="expertise__desc"
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
					<p>
						Our company's team of professionals is highly skilled and
						knowledgeable about all aspects of construction, from the initial
						planning and design phases to the final execution and project
						management. They have a deep understanding of construction
						techniques, materials, and industry standards, and are able to use
						this expertise to provide clients with high-quality, cost-effective
						solutions to their construction needs.
					</p>

					<p>
						These professionals have a wide range of skills and experience,
						including expertise in areas such as project management, budgeting,
						scheduling, quality control, and safety. They are able to coordinate
						the work of contractors, engineers, and other professionals to
						ensure that projects are completed efficiently and effectively.
					</p>

					<p>
						In addition to their technical expertise, your company's
						professionals are also skilled in communication, problem-solving,
						and customer service. They are able to work closely with clients to
						understand their needs and goals, and to provide them with the
						support and guidance they need throughout the construction process.
					</p>

					<p>
						Overall, our company's team of experienced professionals is a
						valuable asset that helps to ensure the success of every
						construction project.
					</p>
				</motion.div>
			</>
		);
	}
}
