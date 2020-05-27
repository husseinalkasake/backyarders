import React, { Component } from "react";
import { Platform, ART, TouchableWithoutFeedback, View } from "react-native";
const { Surface, Group, Path, Shape } = ART;
import Wedge from "./Wedge";

class Pie extends Component {
	getRadius() {
		return this.props.chart_wh / 2;
	}
	handleCover() {
		if (!this.props.doughnut) return;
		const radius = this.getRadius();
		const coverRadius = this.props.chart_wh * this.props.coverRadius;
		const coverPath = new Path()
			.moveTo(radius, radius - coverRadius / 2)
			.arc(0, coverRadius, 25)
			.arc(0, -coverRadius, 25)
			.close();
		return <Shape d={coverPath} fill={this.props.coverFill} />;
	}
	render() {
		const radius = this.getRadius();
		const rotation = Platform.OS === "ios" ? 0 : -90;
		return (
			<Surface
				style={this.props.style}
				width={this.props.chart_wh}
				height={this.props.chart_wh}>
				<Group rotation={rotation} originX={radius} originY={radius}>
					{Object.keys(this.props.series).map((key) => {
						if (
							this.props.angle[key] !=
							this.props.angle[parseInt(key) + 1]
						) {
							return (
								// <TouchableWithoutFeedback>
								// <View>
								<Wedge
									key={key}
									outerRadius={this.getRadius()}
									startAngle={this.props.angle[key]}
									endAngle={
										this.props.angle[parseInt(key) + 1]
									}
									fill={this.props.sliceColor[key]}
								/>
								// </View>
								// </TouchableWithoutFeedback>
							);
						}
					})}
					{this.handleCover()}
				</Group>
			</Surface>
		);
	}
}

export default Pie;
