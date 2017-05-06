import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.js';
import Intro from './Intro.js';
import AboutMe from './AboutMe.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';


class App extends React.Component {
	constructor(props) {
		super();
	}

  render () {
    return (
    	<div>
    		<Nav/>
    		<Intro/>
    		<AboutMe/>
    		<Projects/>
    		<ContactMe/>
    	</div>
    )
  }
}

render(<App/>, document.getElementById('app'));