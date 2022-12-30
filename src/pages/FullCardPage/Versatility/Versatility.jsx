import React, { Component } from "react";
import { seo } from "../../../functions/useDocumentTitle";
import { images } from "../../../constants";
import { motion } from "framer-motion";

import { FullPageHeader, SectionHeader } from "../../../components";

export default class Versatility extends Component {
	componentDidMount() {
		seo({
			title: "Versatility - Das Engeneering",
			metaDescription:
				"Our company can handle a wide range of construction projects, including residential, commercial, and industrial projects of various sizes and complexities.",
		});
	}

	render() {
		return (
			<>
				<FullPageHeader image={images.versatile} />

				<SectionHeader text2="Versatility" />

				<motion.div
					className="expertise__desc"
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
					<p>
						At our company, we are able to handle a wide range of construction
						projects, including residential, commercial, and industrial projects
						of various sizes and complexities. This versatility allows us to
						meet the diverse needs of our clients and to deliver successful
						construction projects in a variety of settings.
					</p>

					<p>
						To achieve this level of versatility, we have a team of experienced
						professionals who are skilled in all aspects of construction, from
						planning and design to execution and project management. They are
						able to adapt to the unique requirements of each project and to
						provide customized solutions that meet the specific needs of our
						clients.
					</p>

					<p>
						In addition to our team's expertise, we also have a wide range of
						construction equipment and resources at our disposal, which enables
						us to tackle projects of any size and complexity. We are able to
						mobilize quickly and to scale our resources as needed to meet the
						demands of each project.
					</p>

					<p>
						Overall, our versatility is a key factor in our ability to deliver
						successful construction projects for our clients, no matter the size
						or complexity of the project.
					</p>
				</motion.div>
			</>
		);
	}
}
