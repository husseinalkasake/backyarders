import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: colors.BACKGROUND_COLOR,
	},
	innerContainer: {
		width: "90%",
		alignSelf: "center",
	},
	field: {
		flexDirection: "row",
		paddingTop: "24%",
		marginHorizontal: "10%",
	},
	text: {
		marginTop: 16,
		fontWeight: "bold",
		position: "absolute",
		left: 0,
	},
	input: {
		position: "absolute",
		right: 0,
		width: "30%",
		maxWidth: 240,
		borderColor: "black",
		borderRadius: 15,
	},
	options: {
		flexDirection: "row",
		position: "absolute",
		right: 0,
	},
	optionButton: {
		marginLeft: 12,
		borderColor: colors.MAIN_COLOR,
		borderRadius: 15,
	},
	optionButtonText: {
		color: colors.MAIN_COLOR,
		fontSize: 12,
	},
	optionButtonSelected: {
		backgroundColor: colors.MAIN_COLOR,
	},
	optionButtonSelectedText: {
		color: colors.BACKGROUND_COLOR,
	},
	nextButton: {
		position: "absolute",
		bottom: "15%",
		backgroundColor: colors.NEXT_BUTTON_COLOR,
		borderColor: colors.NEXT_BUTTON_COLOR,
		alignSelf: "center",
		borderRadius: 15,
	},
	nextButtonText: {
		color: "white",
		fontSize: 18,
	},
	headingText: {
		paddingBottom: 24,
		fontSize: 18,
		position: "absolute",
		left: 0,
	},
	subtitle: {
		marginTop: 16,
		fontWeight: "bold",
		position: "absolute",
		left: "28%",
	},
	slider: {
		width: 350,
		height: 40,
		marginLeft: 12,
		marginTop: 24,
	},
	activityLevels: {
		flexDirection: "row",
		marginHorizontal: -16,
	},
	activityLevel: {
		marginRight: 12,
		backgroundColor: colors.MAIN_COLOR,
		height: 60,
		width: 80,
		justifyContent: "center",
		position: "relative",
		borderRadius: 45,
	},
	sliderContainer: {
		marginTop: 24,
	},
	activityLevelText: {
		fontSize: 14,
		color: "white",
		fontWeight: "bold",
		alignSelf: "center",
	},
	activityLevelTextSelected: {
		color: "black",
	},
	icon: {
		alignSelf: "center",
		paddingTop: 6,
		paddingRight: 12,
		fontSize: 24,
	},
	tooltipText: {
		fontSize: 12,
		position: "absolute",
		bottom: -48,
		left: 6,
	},
	desiredDifficulty: {
		marginRight: 48,
		backgroundColor: colors.MAIN_COLOR,
		height: 80,
		width: 100,
		justifyContent: "center",
		position: "relative",
		borderRadius: 45,
	},
	desiredDifficulties: {
		flexDirection: "row",
		marginHorizontal: -16,
	},
	dragList: {
		position: "absolute",
		width: "90%",
		left: "5%",
		bottom: "-400%", // HACK DUE TO DRAGLIST ACTING WEIRD
	},
	dragListItem: {
		height: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	dragListItemText: {
		fontWeight: "bold",
		color: "white",
		fontSize: 18,
	},
	fitnessGoalsContainer: {
		top: "-15%", // HACK DUE TO DRAGLIST ACTING WEIRD
	},
});

export default styles;
