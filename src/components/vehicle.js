import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';

class Vehicle extends React.Component{
	
// fetchVehicle(){
// 	var answer = "";
// 	console.log("fetch vehicle");
// for(let i=0;i<this.props.stuff.length;i++){
// 	if (this.props.stuff[i].title===this.props.current){
// 		for(let j=0; j<this.props.stuff[i].items.length;j++){
// 			if(this.props.stuff[i].items.id === this.props.inner)
// 				answer = this.props.stuff[i].items[j];
// 			console.log("rr",answer);
// 		}
// 	}
//   }
//   console.log("pranaam yajmaan: here is your vehicle:",answer);
//   return (answer);
// }
doit(){
	// alert();
	console.log("ihi");
	let nme = this.props.params.name;
	let model = this.props.params.model;
	return model;
}

	render(){
		return(
			<div>
				{this.doit()}
				<Link to="/">
				<button>Go back</button>
				</Link>
			</div>

		);
		
	}
}

function mapStateToProps(state){
	return{
		stuff: state.stuff,
		current: state.current.stateRightNow,
		inner: state.inner.rightNow,
	};
}

export default connect(mapStateToProps, null)(Vehicle);
