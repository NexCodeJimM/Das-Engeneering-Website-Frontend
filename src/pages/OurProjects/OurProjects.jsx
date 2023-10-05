import React, { Component } from "react";
import { seo } from "../../functions/useDocumentTitle";
import { SectionHeader } from "../../components";
import { CardsContainer } from "./container";

import "./OurProjects.scss";

export default class OurProjects extends Component {
	componentDidMount() {
		seo({
			title: "Our Projects - Das Engeneering",
			metaDescription:
				"We offer services such as Project management, Equipment Rental, and Commercial Brokers.",
		});
	}

	render() {
		return (
			<div className="projects__main-container">
				<SectionHeader text1="Our" text2="Projects" />

				<CardsContainer />
			</div>
		);
	}
}
