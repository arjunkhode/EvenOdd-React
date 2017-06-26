import { connect } from 'react-redux';
import { swapState } from '../actions/index';
import React, { Component } from 'react';

class App extends Component {
constructor(){
	super();
	this.elem = [];
}

generateButtons(stuff){
		stuff.map((item) => {
			console.log(<button key={item.title}>{item.title}</button>);
			return <button key={item.title}>{item.title}</button>;
		});
}

elemUpdate(){
	let rez = this.props.current;
	let eve = document.querySelector('.evenOdd');
	// eve.textContent = "";
	this.elem=[];
	let answer="";
	for(let i=0;i<this.props.stuff.length;i++){
		if (this.props.stuff[i].title===rez){
			answer = this.props.stuff[i].items;
			// console.log("hhh:",answer);
			answer.map((item) => {this.elem.push(<button key={item.name}>{item.name}</button>)});
			break;
		}
	}	
	return (this.elem);

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

renderButtons(){
console.log(this.elem);
}


toggleButtons(itemID){
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
    <div className="everything">
      <div className="result">React simple starter
      	<div className="generatedButtons">
      	{	this.props.stuff.map((item) => {
			return <button key={item.title} onClick={this.toggleButtons.bind(this, item.title)}>{item.title}</button>
		})}
      	</div>
      	Current state is:
      	<div className="stated"></div>
      	{this.renderButtons.bind(this)}
		</div>
		{this.elemUpdate()}
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