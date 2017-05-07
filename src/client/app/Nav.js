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
  			<img src = "Assets/Name.png" height='60' className = "navLogo"/>
  			<div className = 'navigationPanel'>
          <div className = 'nav' > <a href = "#contact"> Contact Me </a></div>
          <div className = 'nav' > <a href = "#projects"> Projects  </a></div>
          <div className = 'nav' > <a href = "#about"> About </a></div>
    			<div className = 'nav' > <a href = "#home"> Home  </a></div>
    		</div>

  		</div>
		)
	}
}

export default Nav;