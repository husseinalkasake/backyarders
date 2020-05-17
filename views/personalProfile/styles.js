import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 48,
		backgroundColor: "white",
	},
	field: {
		flexDirection: "row",
		paddingTop: 60,
		marginHorizontal: 24,
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
		borderColor: "#4B88B0",
		borderRadius: 15,
	},
	optionButtonText: {
		color: "#4B88B0",
		fontSize: 12,
	},
	optionButtonSelected: {
		backgroundColor: "#4B88B0",
	},
	optionButtonSelectedDisabled: {
		backgroundColor: "gray",
	},
	optionButtonSelectedText: {
		color: "#f4f4f4",
	},
	desiredDifficulty: {
		marginRight: 48,
		backgroundColor: "#4B88B0",
		height: 80,
		width: 100,
		justifyContent: "center",
		position: "relative",
		borderRadius: 45,
	},
	dragList: {
		width: "90%",
		left: "5%",
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
	editButton: {
		position: "absolute",
		right: 12,
		backgroundColor: "#4B88B0",
	},
});

export default styles;
