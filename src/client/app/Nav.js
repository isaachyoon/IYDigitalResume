import React from 'react';
import {render} from 'react-dom';

class Nav extends React.Component {
	constructor() {
		super();
	}

	render(){
		return (
			<div className = 'navigation'>
  			<img src = "Assets/Logo.png" height='70' className = "navLogo"/>
  			<img src = "Assets/Name.jpg" height='60' className = "navLogo"/>
  			<div className = 'navigationPanel'>
    			<div className = 'nav' > Home </div>
    			<div className = 'nav' > About </div>
    			<div className = 'nav' > Projects  </div>
    			<div className = 'nav' > Contact Me </div>
    		</div>
  		</div>
		)
	}
}

export default Nav;