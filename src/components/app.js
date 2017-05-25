import { connect } from 'react-redux';
import React, { Component } from 'react';

class App extends Component {
 
componentDidMount(){
if(this.props.stuff){
	console.log("all stuff is:", this.props.stuff);
}
}

displayEven(){
	if(this.props.stuff){
	document.querySelector('.evenOdd').textContent="";
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
      </div>
    );
  }
}

function mapStateToProps(state){
	return{
		stuff: state.stuff,
	};
}

export default connect(mapStateToProps, null)(App);