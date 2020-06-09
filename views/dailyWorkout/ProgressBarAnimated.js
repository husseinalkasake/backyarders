import React from "react";
import { Animated, Dimensions, Easing } from "react-native";
import { CustomStyleSheet, colors } from "../../styles";

const styles = CustomStyleSheet({
	progress: {
		backgroundColor: colors.MAIN_COLOR,
		height: 10,
		width: 2,
	},
});

class ProgressBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			percent: new Animated.Value(0),
			pausedAt: null,
		};
	}

	componentDidMount() {
		this.startAnimation();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (!nextProps.isRunning) {
			this.state.percent.stopAnimation((finalValue) => {
				// TODO this always returns a zero ...
				this.setState({ pausedAt: finalValue });
			});
		}
		if (nextProps.timeRemaining > this.props.timeRemaining) {
			this.setState(
				{ percent: new Animated.Value(0) },
				this.startAnimation
			);
		}
	}

	startAnimation = () => {
		this.animation = Animated.timing(this.state.percent, {
			toValue: 100,
			duration: this.props.timeRemaining,
			easing: Easing.linear,
			useNativeDriver: true,
		});

		this.animation.start();
	};

	render() {
		const { percent } = this.state;
		const { width } = Dimensions.get("window");
		return (
			<Animated.View
				style={[
					styles.progress,
					{
						transform: [
							{
								scaleX: percent.interpolate({
									inputRange: [0, 100],
									outputRange: [0, width],
								}),
							},
						],
					},
				]}
			/>
		);
	}
}

export default ProgressBar;
