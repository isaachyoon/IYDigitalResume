import React from 'react';
import {render} from 'react-dom';

class ContactMe extends React.Component {

	submitted() {
		//the function is working

	}

	render(){
		return (
    	<div className = 'contactMe' id = "contact">
    		<div className = 'contactMeSign'>
    			<img src = "Assets/contactme.jpg" height='90'/>
    		</div>
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
    	</div>
		)
	}
}

export default ContactMe;