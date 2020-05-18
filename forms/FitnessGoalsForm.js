import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import { connect } from "react-redux";
import DraggableFlatList from "react-native-draggable-flatlist";
import { updateFitnessGoals } from "../redux/actions";
import styles from "../views/questionnaire/styles";

class FitnessGoalsForm extends React.Component {
	// convert fitness goals to draggable list format
	getDraggableListData() {
		return this.props.fitnessGoals.map((textValue, index) => ({
			key: `fitness-goal-${index}`,
			label: textValue,
			backgroundColor: "#4B88B0", // TODO: GET THIS FROM STYLES FILE (AFTER STYLE REFACTORING)
		}));
	}

	// item to render for each entry in list
	draggableListItem = ({ item, drag, isActive }) => (
		<TouchableOpacity
			style={{
				...styles.dragListItem,
				backgroundColor: isActive ? "#4B88B0" : item.backgroundColor,
			}}
			onPressIn={drag}>
			<Text style={styles.dragListItemText}>{item.label}</Text>
		</TouchableOpacity>
	);

	render() {
		return [
			<View>
				<Text style={styles.subtitle}>Rank your fitness goals</Text>
			</View>,
			<View style={styles.dragList}>
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
			</View>,
		];
	}
}

const mapStateToProps = (state) => ({
	fitnessGoals: state.fitnessGoals,
});

const mapDispatchToProps = (dispatch) => ({
	updateFitnessGoals: (fitnessGoals) =>
		dispatch(updateFitnessGoals(fitnessGoals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FitnessGoalsForm);
