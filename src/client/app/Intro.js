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
            Welcome to my digital portfolio where you can find my past and current work! <br/>
            If you have any questions, click on any of the icons below to connect with me :)
          </div>
          <div className = "icons">
            <a href = "https://drive.google.com/file/d/0B8SfZITBG2KpYWxyaVpEeFBnVVE/view?usp=sharing">
              <FaFileText className = 'icon' />
              <div className = 'popUp'>Resume</div>
            </a>
            <a href = "http://linkedin.com/in/isaacyoon">
              <FaLinkedinSquare className = 'icon'/>
              <div className = 'popUp'>linkedin</div>
            </a>

            <a href = "http://github.com/isaacHyoon">
              <FaGithubAlt className = 'icon' />
              <div className = 'popUp'>Github</div>
            </a>

            <a href = "mailto:ysaacioon@yahoo.com" target="_top">
             <FaEnvelopeO className = 'icon'/>
              <div className = 'popUp'>Email</div>
            </a>
            <br/>
            <br/>
          </div>
      </div>
		)
	}
}

export default Intro;