import React from "react";
import { Text } from "react-native";
import { CustomStyleSheet } from "../../../styles";

const styles = CustomStyleSheet({
	textSmall: { fontSize: 30 },
	textBig: { fontSize: 72 },
});

const Countdown = (props) => {
	const totalSecs = Math.round(props.timeRemaining / 1000);
	const mins = Math.floor(totalSecs / 60);
	const secs = totalSecs % 60;
	const paddedZero = secs < 10 ? "0" : "";
	return (
		<Text
			style={[
				props.size === "big" ? styles.textBig : styles.textSmall,
				props.style,
			]}>
			{mins}:{paddedZero}
			{secs}
		</Text>
	);
};

export default Countdown;
