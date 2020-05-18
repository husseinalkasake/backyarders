import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import DraggableFlatList from "react-native-draggable-flatlist";
import { colors, CustomStyleSheet } from "../../styles";

class FitnessGoalsDragList extends React.Component {
	// convert fitness goals to draggable list format
	getDraggableListData() {
		return this.props.fitnessGoals.map((textValue, index) => ({
			key: `fitness-goal-${index}`,
			label: textValue,
			backgroundColor: colors.MAIN_COLOR,
		}));
	}

	// item to render for each entry in list
	draggableListItem = ({ item, drag }) => (
		<TouchableOpacity
			style={{
				...styles.dragListItem,
				backgroundColor: this.props.isEdit
					? item.backgroundColor
					: "gray",
			}}
			onPressIn={() => this.props.isEdit && drag()}>
			<Text style={styles.dragListItemText}>{item.label}</Text>
		</TouchableOpacity>
	);

	render() {
		return (
			<View style={[styles.dragList, styles.dragListCenter]}>
				<DraggableFlatList
					data={this.getDraggableListData()}
					renderItem={this.draggableListItem}
					keyExtractor={(item, index) =>
						`draggable-item-${item.key}-${index}`
					}
					onDragEnd={({ data }) =>
						this.props.updateFitnessGoals({ data })
					}
				/>
			</View>
		);
	}
}

const styles = CustomStyleSheet({
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
});

export default FitnessGoalsDragList;
