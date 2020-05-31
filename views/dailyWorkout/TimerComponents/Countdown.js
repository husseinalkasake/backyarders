import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
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
				props.size == "big" ? styles.textBig : styles.textSmall,
				props.style,
			]}>
			{mins}:{paddedZero}
			{secs}
		</Text>
	);
};

export default Countdown;
