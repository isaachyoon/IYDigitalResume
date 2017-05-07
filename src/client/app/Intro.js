import React from 'react';
import {render} from 'react-dom';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubAlt from "react-icons/lib/fa/github-alt";
import FaAngellist from "react-icons/lib/fa/angellist";
import FaEnvelopeO from "react-icons/lib/fa/envelope-o";
import FaFileText from "react-icons/lib/fa/file-text";



class Intro extends React.Component {


	render(){
		return (
			<div className = "intro" id = "home">
          <div className ='begAnimate'>
          	<br/>
            Hi! I'm Isaac! <br/>
            Welcome to my page where you can find my current and past work! <br/>
            If you have any questions, please leave me a message :)
          </div>
          <div className = "icons">
            <a href = "linkedin.com/in/isaacyoon">
              <FaFileText className = 'icon' />
            </a>
            <a href = "http://linkedin.com/in/isaacyoon">
              <FaLinkedinSquare className = 'icon'/>
            </a>
            <a href = "http://github.com/isaacHyoon">
              <FaGithubAlt className = 'icon' />
            </a>
            <a href = "mailto:ysaacioon@yahoo.com" target="_top">
             <FaEnvelopeO className = 'icon'/>
            </a>
          </div>
      </div>
		)
	}
}

export default Intro;