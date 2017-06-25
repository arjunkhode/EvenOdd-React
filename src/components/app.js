import { connect } from 'react-redux';
import { swapState } from '../actions/index';
import React, { Component } from 'react';

class App extends Component {
 // constructor(){
 // 	this.generateButtons = this.generateButtons.bind(this);
 // }

generateButtons(stuff){
		stuff.map((item) => {
			console.log(<button key={item.title}>{item.title}</button>);
			return <button key={item.title}>{item.title}</button>;
		});
}

// componentDidMount(){
// 	// console.log("Hello");
// 	if(this.props.stuff){
// 		// const ap = generateButtons(this.props.stuff);
// 		// document.append(ap);
// 	// console.log("all stuff is:", this.props.stuff);
// 	}
// }

componentDidUpdate(){
	document.querySelector('.stated').textContent=this.props.current;
	console.log("changed the state to:",this.props.current);
}

displayResult(e){
	// console.log("hi");
	if(this.props.stuff){
		// console.log("hiya");
	// document.querySelector('.evenOdd').textContent="";
		// if old state was odd, we call swapState action
		// if(this.props.current === "odd"){
			// console.log("even says: was odd, so switching state");
			console.log(e.target);
			this.props.swapState("");
		// // }
		// let cartemp = ""; // stores filtered cars in it, collects all results
		// this.props.stuff.map((current)=> {
		// 	if(current.title==="car")
		// 	{current.items.map((item) => {cartemp+= "\n"+item.name});
		// 	}
		// 	document.querySelector('.evenOdd').textContent = cartemp;
		// 	// console.log("car:",current.items);
		// });
	}
}

toggleButtons(itemID){
console.log(this)
console.log(itemID)
this.props.swapState(itemID);
}

displayOdd(){
	if(this.props.stuff){
	// document.querySelector('.evenOdd').textContent="";
		// if old state was even, we swapState
		if(this.props.stuff === "even"){
			// console.log("odd says: was even, so switching state");
			this.props.swapState("even"); // pass current state to swapState
		}
		// this.props.stuff.map((current)=> {
		// 	if(current.type==="odd")
		// 	document.querySelector('.evenOdd').textContent+=" "+current.other;
		// 	console.log("odd:",current.other);
		let biketemp = ""; // stores all bike results to display
		this.props.stuff.map((current)=> {
			if(current.title==="bike")
			{current.items.map((item) => {biketemp+= "\n"+item.name});
			}
			document.querySelector('.evenOdd').textContent = biketemp;
		});
	}
}

  render() {
    return (
      <div className="result">React simple starter
      	<div className="generatedButtons">
      	{	this.props.stuff.map((item) => {
			return <button key={item.title} onClick={this.toggleButtons.bind(this, item.id)}>{item.title}</button>
		})}
      	</div>
      	<div className="evenOdd">
      		Result:
      	</div>
      	Current state is:
      	<div className="stated"></div>
      </div>
    );
  }
}

function mapStateToProps(state){
	return{
		stuff: state.stuff,
		current: state.current.stateRightNow,
	};
}

export default connect(mapStateToProps, {swapState})(App);