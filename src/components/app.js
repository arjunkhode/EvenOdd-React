import { connect } from 'react-redux';
import { swapState, setVehicle } from '../actions/index';
import React, { Component } from 'react';

class App extends Component {
constructor(){
	super();
	this.elem = [];
	var name2dispay="";
}

generateButtons(stuff){
		stuff.map((item) => {
			console.log(<button key={item.title}>{item.title}</button>);
			return <button key={item.title}>{item.title}</button>;
		});
}

level2click(id){
this.props.setVehicle(id);
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
			answer.map((item) => {this.elem.push(<button onClick={this.level2click.bind(this,item.name)} key={item.name+item.id}>{item.name}</button>)});
			break;
		}
	}	
	return (this.elem);

}

// vehiUpdate(){

// 	// let jez = this.props.inner;
// 	// let rez = this.props.current;
// 	// let eve = document.querySelector('.vehiDetails');
// 	// // eve.textContent = "";
// 	// this.vehi=[];
// 	// let swer="";
// 	// for(let i=0;i<this.props.stuff.length;i++){
// 	// 	if (this.props.stuff[i].title===rez){
// 	// 		swer = this.props.stuff[i].items;
// 	// 		// console.log("hhh:",answer);
// 	// 		swer.map((item) => {if(item.name === this.props.inner) this.name2display=item.name;});
// 	// 		break;
// 	// 	}
// 	// }	
// 	// return ("presenting: ",this.name2display);
// return (this.props.inner);
// }
// componentDidMount(){
// 	// console.log("Hello");
// 	if(this.props.stuff){
// 		// const ap = generateButtons(this.props.stuff);
// 		// document.append(ap);
// 	// console.log("all stuff is:", this.props.stuff);
// 	}
// }

componentDidUpdate(){
	// document.querySelector('.stated').textContent=this.props.current;
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

resetAll(){
	this.props.swapState("");
	this.props.setVehicle("");
	this.elem=[];
	document.querySelector('.vehiDetails').innerHTML="";
	// document.querySelector('.btns').innerHTML="";
}

  render() {
    return (
    <div className="everything">
    {this.props.children}
      <div className="result">React simple starter
      	<div className="generatedButtons">
      	{	this.props.stuff.map((item) => {
			return <button key={item.title} onClick={this.toggleButtons.bind(this, item.title)}>{item.title}</button>
		})}
      	</div>
      	Current state is:
      	<div className="stated">
      	{this.props.current}
      	</div>
      	
		<div className="btns">
		{this.elemUpdate()} 
		</div>
		<div className="vehiDetails">
			{this.props.inner}
			<button onClick={this.resetAll.bind(this)}>CLOSE</button>
		</div>
		</div>
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

export default connect(mapStateToProps, {swapState,setVehicle})(App);