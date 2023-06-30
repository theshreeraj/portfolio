import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./vyolve log.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Vyolve Paisa</div>
							<div className="work-subtitle">
								UX Designer & Ui Developer
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>

						<div className="work">
							<img
								src="./samsung.png"
								alt="samsung"
								className="work-image"
							/>
							<div className="work-title">Samsung</div>
							<div className="work-subtitle">
								Sales Assistant
							</div>
							<div className="work-duration">2019 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
