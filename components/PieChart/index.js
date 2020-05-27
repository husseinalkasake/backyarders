import React, { Component } from "react";
import Pie from "./Pie.js";

class PieChart extends Component {
	handleAngle() {
		const series = this.props.series;
		const sum = series.reduce((previous, current) => {
			return previous + current;
		}, 0);
		const angle = series.reduce(
			(previous, current, index) => {
				if (index == series.length - 1) {
					return previous.concat(360);
				} else {
					return previous.concat(
						previous[previous.length - 1] +
							Math.round((360 * current) / sum)
					);
				}
			},
			[0]
		);
		return angle;
	}
	render() {
		return <Pie {...this.props} angle={this.handleAngle()} />;
	}
}

PieChart.defaultProps = {
	coverFill: "#FFF",
	coverRadius: 0.6,
	doughnut: false,
	style: {},
};

export default PieChart;
