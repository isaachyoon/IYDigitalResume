import React from 'react';
import {render} from 'react-dom';
import FaGithubAlt from "react-icons/lib/fa/github-alt";
import ProjectImage from './projectImage';


class Projects extends React.Component {
	constructor(){
		super();

		this.state = {
			project: projectInfo
		}
	}

	githubClicked(link){

		window.open(link)
	}

	imageClicked(){
		console.log('clicked')
	}



	render(){

		var indProject = projectInfo.map((project)=> {
			return (
				<div id = "projects">
					<div className = "projectPanel" >
						<ProjectImage imgProp = {project.projectImg} />
						<div className = "projectDescription" >
							<div className = "projectTitle"> {project.projectTitle} </div>
							<h4> {project.projectDescription} </h4>
							<div className = "tech">
							<div>
								<FaGithubAlt className = 'iconic' height= "50px"/>
							</div>
								{project.techStack.map((item) => { return (
									<div className = "techStack">
										{item}
									</div>
								)})}
							</div>
						</div>
					</div>
				</div>
			)
		})


		return (
    	<div className = "projects">
    		<img src = "Assets/projects.png" height='90'/>
    		{indProject}
    	</div>
		)
	}
}

var projectInfo = [
	{
		"projectImg": ["Assets/limeRock.png", "Assets/login.png", 'Assets/welcome.png', 'Assets/nav.png', 'Assets/stock.png', 'Assets/news.png', 'Assets/history.png'],
		"projectTitle": "LimeRock",
		"projectDescription": "Lime Rock is a gamified mobile stock trading simulator that allows users to compare their returns to friends and major benchmarks. The app fetches real stock trading data through API call to simulate real trading experience. The app has numerous features which includes buy and sell recommendations, trade history, relevant news for stocks and dashboard for user's performance and ranking.",
		"githubLink": "https://github.com/nazguls/thesis",
		"githubLogo": "Assets/githubLogo",
		"techStack": ["ReactNative-Redux", "Node/Express", "MySQL"]
	},
	{
		"projectImg": ["Assets/digitalPortfolio.png"],
		"projectTitle": "IYDigitalPortfolio",
		"projectDescription": "Digital portfolio showcasing my past and recent software engineering applications. This single page application dynamically renders page and is built to be responsive to any web or mobile device.",
		"githubLink": "https://github.com/isaachyoon/IYDigitalResume",
		"githubLogo": "Assets/githubLogo",
		"techStack": ["React", "Node/Express", "Heroku"]
	},
	{
		"projectImg": ["Assets/legislationWatch.png", "Assets/legislationWatch2.png", "Assets/legislationWatch3.png", "Assets/legislationWatch4.png", "Assets/legislationWatch5.png"],
		"projectTitle": "LegislationWatch",
		"projectDescription": "An app for people who want to know what happens in congress about issues they care about. The app fetches the latest bills drafted in congress and delivers them to each user's in-app dashboard, and email.",
		"githubLink": "https://github.com/brandybucks/proudfoots",
		"githubLogo": "Assets/githubLogo",
		"techStack": ["React", "Node/Express", "Mongo/NoSQL"]
	},
	{
		"projectImg": ["Assets/Llama.png"] ,
		"projectTitle": "Llama",
		"projectDescription": "This is a tool that helps educators and parents better support students with disabilities by tracking student goals and streamlining the IEP reporting process. Teachers can easily submit updates with images of student while parents can easily view their child's progress and identify areas that need additional support.",
		"githubLink": "https://github.com/brandybucks/brandybucks",
		"githubLogo": "Assets/githubLogo",
		"techStack": ["React", "Node/Express", "MySQL"]
	}
]

export default Projects;

