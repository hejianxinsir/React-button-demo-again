import React from 'react';
import './Button.css';

class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			active: false,	
			deltaX: 0,
			deltaY: 0
		}
		this.myRef = React.createRef();
	}

	x(event){
						
			let {x,y} = this.myRef.current.getBoundingClientRect()
			let {clientX, clientY} = event
			let deltaX = clientX - x -5;
			let deltaY = clientY - y -5;

			console.log(deltaX);console.log(deltaY);				
			this.setState({
				active: true,
				deltaX: deltaX,
				deltaY: deltaY
			})

	}
	y(){
		this.setState({
			active: false	
		})	
	}
	render(){
		return(
			<button className="btn1"
							onClick={this.x.bind(this)}	
							ref={this.myRef}
			>
				{this.state.active === true? 
							<span className="dot" onAnimationEnd={this.y.bind(this)}
								style={{ left: this.state.deltaX, top: this.state.deltaY }}></span> 
							: ''
				}
				{this.props.value}
			</button>
		)	
	}
}

export default Button
