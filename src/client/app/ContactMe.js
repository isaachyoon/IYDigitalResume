import React from 'react';
import {render} from 'react-dom';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaGithubAlt from "react-icons/lib/fa/github-alt";
import FaAngellist from "react-icons/lib/fa/angellist";
import FaEnvelopeO from "react-icons/lib/fa/envelope-o";
import FaFileText from "react-icons/lib/fa/file-text";


class ContactMe extends React.Component {

	submitted() {
		//the function is working

	}

	render(){
		return (
    	<div className = 'contactMe' id = "contact">
    		<div className = 'contactMeSign'>
    			<img src = "Assets/contactme.png" height='90'/>
    		</div>

        <div className = "icons">
          <a href = "linkedin.com/in/isaacyoon">
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
        </div>

    	</div>
		)
	}
}

export default ContactMe;

/*
	<div className = 'inputInfo'>
    			<form>
				  	Name:
				  	<input type="text" name="Name" value="Isaac Yoon"/> <br/>
				  	Email
				  	<input type="email" name="email" value="isaacyoon@gmail.com"/> <br/>
				  	Message
				  	<textarea rows="4" cols = "50">
				  		For any inquiry, please write here
				  	</textarea> <br/>
				  	<br/>
				  	<input type="submit" value="Submit" onClick = {this.submitted.bind(this)}/>
					</form>
    		</div>
*/