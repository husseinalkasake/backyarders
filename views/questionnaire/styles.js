import { colors, CustomStyleSheet } from "../../styles";

const styles = CustomStyleSheet({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: colors.BACKGROUND_COLOR,
	},
	innerContainer: {
		width: "90%",
		alignSelf: "center",
	},
	slider: {
		width: 350,
		height: 40,
		marginLeft: 12,
		marginTop: 24,
	},
	sliderContainer: {
		marginTop: 24,
	},
	sliderOptionText: {
		fontSize: 14,
		color: "white",
		fontWeight: "bold",
		alignSelf: "center",
	},
	sliderOptionTextSelected: {
		color: "black",
	},
});

export default styles;
