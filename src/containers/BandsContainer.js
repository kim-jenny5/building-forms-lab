import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

export class BandsContainer extends Component {
	render() {
		// this.props.addBand({ name: "Black Eyed Peas" });
		// this.props.addBand({ name: "Cherryfilter" });
		// console.log(this.props);
		return (
			<div>
				<BandInput addBand={this.props.addBand}></BandInput>
				<ul>
					{this.props.bands.map((band, idx) => {
						return <li key={idx}>{band.name}</li>;
					})}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { bands: state.bands };
};

const mapDispatchToProps = (dispatch) => {
	return {
		addBand: (band) => {
			// console.log(band);
			dispatch({ type: "ADD_BAND", band }); // dispatches to reducer
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
