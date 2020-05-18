import { CustomStyleSheet } from "../../styles";

const styles = CustomStyleSheet({
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
