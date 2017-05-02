import React from 'react';
import {render} from 'react-dom';

class AboutMe extends React.Component {


	render(){
		return (
			<div className = 'aboutME'>
    		<img src = "Assets/about.jpg" height='90'/>

	    		<div className = 'descriptionBox'>
	    			<div width = '30%'>
	    				<img src = "Assets/face.jpg" className = 'face' height='300' />
	    			</div>
	    			<div className = 'description'>
	    				Driven software engineer with a strong foundation in web and mobile development. I worked on building multiple application writing client and server JavaScript, building advanced React, React native component based UI, and deploying flexible Node.js web service REST APIs. I enjoy solving challenging problems in innovative ways, while implementing well designed and maintainable code. Passionate about building, learning, and teaching software development. Please feel free to reach out to me at isaachyoon@gmail.com
	    			</div>
	    		</div>

  		</div>
		)
	}
}

export default AboutMe;