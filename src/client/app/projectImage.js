import React from 'react';
import {render} from 'react-dom';
import FaAngleDoubleRight from 'react-icons/lib/fa/angle-double-right';
import FaAngleDoubleLeft from 'react-icons/lib/fa/angle-double-left';

class ProjectImage extends React.Component {
	constructor(props){
		super(props);
		// var top = props.imgProp.length-1;
		this.state = {
			scene: 0,
			img: props.imgProp[0]
			// img: props.imgProp[0]
		}
	}

	leftArrowPressed(){
		console.log(this.state.scene)
		var i = this.state.scene;
		if(i-1 >= 0) {
			this.setState({scene: i-1})
			this.setState({img: this.props.imgProp[i-1]})
		}

	}

	rightArrowPressed(){
		console.log(this.state.scene)
		var i = this.state.scene;
		if(this.props.imgProp[i+1]) {
			this.setState({scene: i+1})
			this.setState({img: this.props.imgProp[i+1]})
		}

	}

	render(){
		var top = this.state.scene.length-1;

		return (
			<div>
				<FaAngleDoubleLeft className = 'arrows' onClick = {this.leftArrowPressed.bind(this)}/>
				<img src = {this.state.img} height = "300" className = 'projectImage' />
				<FaAngleDoubleRight className = 'arrows' onClick = {this.rightArrowPressed.bind(this)}/>
			</div>
		)
	}
}

export default ProjectImage;