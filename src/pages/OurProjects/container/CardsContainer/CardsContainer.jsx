import React from "react";
import { ProjectCard } from "../../../../components";
import { images } from "../../../../constants";
import "./CardsContainer.scss";

const CardsContainer = () => {
	return (
		<div className="cardsContainer__main-container">
			<ProjectCard
				title="Project Title"
				description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
					praesentium delectus, totam maxime perferendis recusandae neque
					consequatur necessitatibus voluptatibus deleniti officiis iste eveniet
					reprehenderit fuga facilis dolorum ipsa minus debitis!"
				projectImage={images.projectImage}
			/>

			<ProjectCard
				title="Project Title"
				description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
					praesentium delectus, totam maxime perferendis recusandae neque
					consequatur necessitatibus voluptatibus deleniti officiis iste eveniet
					reprehenderit fuga facilis dolorum ipsa minus debitis!"
				projectImage={images.projectImage}
			/>
		</div>
	);
};

export default CardsContainer;
