import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Vehicle extends React.Component{
	render(){
		return(
			<div>
				<p>asd</p>
				<Link to="/">
				<button>Go back</button>
				</Link>
			</div>

		);
		
	}
}
