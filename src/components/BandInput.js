// Add BandInput component
import React, { Component } from "react";

export default class BandInput extends Component {
	state = { name: "" };

	handleInput = (e) => {
		// this.setState({ name: e.target.value }, () => console.log(this.state));
		this.setState({ name: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addBand(this.state);
		this.setState({ name: "" });
		// this.setState({ name: "" }, () => console.log(this.state));
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					onChange={this.handleInput}
					value={this.state.name}
				></input>
				<input type="submit"></input>
			</form>
		);
	}
}
