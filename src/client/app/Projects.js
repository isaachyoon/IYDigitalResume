import React from 'react';
import {render} from 'react-dom';
// import projectInfo from "./6project.json";

class Projects extends React.Component {

	githubClicked(link){

		window.open(link)
	}


	render(){

		var indProject = projectInfo.map((project)=> {
			return (
				<div>
					<div className = "projectPanel" >
						<img src = {project.projectImg} height = "300" className = 'projectImage'/>
						<div className = "projectDescription" >
							<h3> {project.projectTitle} </h3>
							<h5> {project.projectDescription} </h5>
							<div>
								<img src = 'Assets/githubLogo.png' height = '50' className = 'githubLogo' onClick = {this.githubClicked.bind(this, project.githubLink)}/>
							</div>
						</div>
					</div>
				</div>
			)
		})


		return (
    	<div className = "projects">
    		{indProject}
    	</div>
		)
	}
}

var projectInfo = [
	{
		"projectImg": "Assets/limeRock.png",
		"projectTitle": "LimeRock",
		"projectDescription": "Lime Rock is a gamified mobile stock trading simulator that allows users to compare their returns to friends and major benchmarks. The app fetches real stock trading data through API call to simulate real trading experience. The app has numerous features which includes buy and sell recommendations, trade history, relevant news for stocks and dashboard for user's performance and ranking.",
		"githubLink": "https://github.com/nazguls/thesis",
		"githubLogo": "Assets/githubLogo",
		"techStack": ["ReactNative-Redux", "Node/Express", "MySQL"]
	},
	{
		"projectImg": "Assets/legislationWatch.png" ,
		"projectTitle": "LegislationWatch",
		"projectDescription": "An app for people who want to know what happens in congress about issues they care about. The app fetches the latest bills drafted in congress and delivers them to each user's in-app dashboard, and email.",
		"githubLink": "https://github.com/brandybucks/proudfoots",
		"githubLogo": "Assets/githubLogo",
		"techStack": ["React", "Node/Express", "Mongo/NoSQL"]
	},
	{
		"projectImg": "Assets/Llama.png" ,
		"projectTitle": "Llama",
		"projectDescription": "This is a tool that helps educators and parents better support students with disabilities by tracking student goals and streamlining the IEP reporting process. Teachers can easily submit updates with images of student while parents can easily view their child's progress and identify areas that need additional support.",
		"githubLink": "https://github.com/brandybucks/brandybucks",
		"githubLogo": "Assets/githubLogo",
		"techStack": ["React", "Node/Express", "MySQL"]
	}
]

export default Projects;

