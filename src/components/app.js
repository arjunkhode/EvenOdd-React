import { connect } from 'react-redux';
import { swapState } from '../actions/index';
import React, { Component } from 'react';

class App extends Component {
 
componentDidMount(){
if(this.props.stuff){
	console.log("all stuff is:", this.props.stuff);
}
}

componentDidUpdate(){
	document.querySelector('.stated').textContent=this.props.current;
}

displayEven(){
	if(this.props.stuff){
	document.querySelector('.evenOdd').textContent="";
		// if old state was odd, we call swapState action
		if(this.props.current === "odd"){
			console.log("even says: was odd, so switching state");
			this.props.swapState("odd");
		}
		this.props.stuff.map((current)=> {
			if(current.type==="even")
			document.querySelector('.evenOdd').textContent+=" "+current.other;
			console.log("even:",current.other);
		});
	}
}


displayOdd(){
	if(this.props.stuff){
	document.querySelector('.evenOdd').textContent="";
		// if old state was even, we swapState
		if(this.props.current === "even"){
			console.log("odd says: was even, so switching state");
			this.props.swapState("even"); // pass current state to swapState
		}
		this.props.stuff.map((current)=> {
			if(current.type==="odd")
			document.querySelector('.evenOdd').textContent+=" "+current.other;
			console.log("odd:",current.other);
		});
	}
}

  render() {
    return (
      <div className="result">React simple starter
      	<button className="even" onClick={this.displayEven.bind(this)}>Even</button>
      	<button className="odd" onClick={this.displayOdd.bind(this)} >Odd</button>
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