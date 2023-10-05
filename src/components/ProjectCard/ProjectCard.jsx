import React from "react";

import "./ProjectCard.scss";

const ProjectCard = ({ title, description, projectImage }) => {
	return (
		<figure className="image-block">
			<h1>{title}</h1>
			<img src={projectImage} alt="project" />

			<figcaption>
				<h3>More Info</h3>

				<p>{description}</p>

				<button>More Info</button>
			</figcaption>
		</figure>
	);
};

export default ProjectCard;
