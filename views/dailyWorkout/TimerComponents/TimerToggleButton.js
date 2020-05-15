import React from "react";
import { Button } from "react-native";

const TimerToggleButton = (props) => {
	const title = props.isRunning ? "Pause" : "Start";
	return <Button title={title} onPress={props.onToggle} />;
};

export default TimerToggleButton;
