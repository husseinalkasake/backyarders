import styles from "./styles";
import { StyleSheet } from "react-native";

function CustomStyleSheet(style) {
	return StyleSheet.create({
		...styles,
		...style,
	});
}

export default CustomStyleSheet;
