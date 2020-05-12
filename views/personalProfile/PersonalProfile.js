/*
This page shows the personal profile of a user.
*/

import React from "react";
import { View, TouchableOpacity, Keyboard } from "react-native";
import { connect } from "react-redux";
import DraggableFlatList from "react-native-draggable-flatlist";
import {
	updateAge,
	updateSex,
	updateWeight,
	updateHeight,
	updateActivityLevel,
	updateDesiredDifficulty,
	updateFitnessGoals,
} from "../../redux/actions";
import { Input, Item, Button, Text, Picker } from "native-base";
import styles from "./styles";
import sex from "../../resources/sex";
import activityLevel from "../../resources/activityLevel";
import desiredDifficulty from "../../resources/desiredDifficulty";

class PersonalProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEdit: false,
			keyboardShowing: false,
		};
	}

	componentWillMount() {
		this.keyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			() => this.setState({ keyboardShowing: true })
		);
		this.keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			() => this.setState({ keyboardShowing: false })
		);
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}

	getDraggableListData() {
		return this.props.fitnessGoals.map((textValue, index) => ({
			key: `fitness-goal-${index}`,
			label: textValue,
			backgroundColor: "#4B88B0", // TODO: GET THIS FROM STYLES FILE (AFTER STYLE REFACTORING)
		}));
	}

	// item to render for each entry in list
	draggableListItem = ({ item, drag }) => (
		<TouchableOpacity
			style={{
				...styles.dragListItem,
				backgroundColor: this.state.isEdit
					? item.backgroundColor
					: "gray",
			}}
			onPressIn={() => this.state.isEdit && drag()}>
			<Text style={styles.dragListItemText}>{item.label}</Text>
		</TouchableOpacity>
	);

	getPickerItems = (object) => {
		const items = [];
		for (const [key, value] of Object.entries(object)) {
			if (value < 0) continue;
			const text = key.toLowerCase();
			items.push(
				<Picker.Item
					label={text.charAt(0).toUpperCase() + text.slice(1)}
					value={value}
					key={`key-${value}`}
				/>
			);
		}
		return items;
	};

	render() {
		const { isEdit } = this.state;
		this.props.navigation.setOptions({
			title: `${isEdit ? "Edit " : ""}Personal Profile`,
			headerRight: () => (
				<Button
					style={styles.editButton}
					onPress={() => this.setState({ isEdit: !isEdit })}>
					<Text>Edit</Text>
				</Button>
			),
		});

		const {
			sex: currentSex,
			activityLevel: currentActivityLevel,
			desiredDifficulty: currentDesiredDifficulty,
		} = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.field}>
					<Text style={styles.text}>Age</Text>
					<Item regular style={styles.input}>
						<Input
							disabled={!isEdit}
							keyboardType="number-pad"
							onChangeText={(text) =>
								this.props.updateAge(this.numberInput(text))
							}
							value={this.props.age}
						/>
					</Item>
				</View>

				<View style={styles.field}>
					<Text style={styles.text}>Sex</Text>
					<View style={styles.options}>
						<Button
							bordered
							style={[
								styles.optionButton,
								currentSex === sex.MALE &&
									(isEdit
										? styles.optionButtonSelected
										: styles.optionButtonSelectedDisabled),
							]}
							onPress={() =>
								isEdit && this.props.updateSex(sex.MALE)
							}>
							<Text
								style={[
									styles.optionButtonText,
									currentSex === sex.MALE &&
										styles.optionButtonSelectedText,
								]}>
								Male
							</Text>
						</Button>
						<Button
							bordered
							style={[
								styles.optionButton,
								currentSex === sex.FEMALE &&
									(isEdit
										? styles.optionButtonSelected
										: styles.optionButtonSelectedDisabled),
							]}
							onPress={() =>
								isEdit && this.props.updateSex(sex.FEMALE)
							}>
							<Text
								style={[
									styles.optionButtonText,
									currentSex === sex.FEMALE &&
										styles.optionButtonSelectedText,
								]}>
								Female
							</Text>
						</Button>
					</View>
				</View>

				<View style={styles.field}>
					<Text style={styles.text}>Weight (kg)</Text>
					<Item regular style={styles.input}>
						<Input
							disabled={!isEdit}
							keyboardType="number-pad"
							onChangeText={(text) =>
								this.props.updateWeight(this.numberInput(text))
							}
							value={this.props.weight}
						/>
					</Item>
				</View>

				<View style={styles.field}>
					<Text style={styles.text}>Height (cm)</Text>
					<Item regular style={styles.input}>
						<Input
							disabled={!isEdit}
							keyboardType="number-pad"
							onChangeText={(text) =>
								this.props.updateHeight(this.numberInput(text))
							}
							value={this.props.height}
						/>
					</Item>
				</View>

				<View style={styles.field}>
					<Text style={styles.text}>Current Activity Level</Text>
					<Picker
						note
						mode="dropdown"
						enabled={isEdit}
						selectedValue={currentActivityLevel}
						onValueChange={(activityLevel) =>
							this.props.updateActivityLevel(activityLevel)
						}>
						{this.getPickerItems(activityLevel)}
					</Picker>
				</View>
				{!this.state.keyboardShowing && (
					<View style={styles.field}>
						<Text style={styles.text}>Fitness Goal Ranking</Text>
					</View>
				)}
				{!this.state.keyboardShowing && (
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
					</View>
				)}
				<View style={[styles.field, styles.desiredDifficultyContainer]}>
					<Text style={styles.text}>Desired Difficulty</Text>
					<Picker
						note
						mode="dropdown"
						enabled={isEdit}
						selectedValue={currentDesiredDifficulty}
						onValueChange={(desiredDifficulty) =>
							this.props.updateDesiredDifficulty(
								desiredDifficulty
							)
						}>
						{this.getPickerItems(desiredDifficulty)}
					</Picker>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	age: state.age,
	sex: state.sex,
	weight: state.weight,
	height: state.height,
	activityLevel: state.activityLevel,
	desiredDifficulty: state.desiredDifficulty,
	fitnessGoals: state.fitnessGoals,
});

const mapDispatchToProps = (dispatch) => ({
	updateAge: (age) => dispatch(updateAge(age)),
	updateSex: (sex) => dispatch(updateSex(sex)),
	updateWeight: (weight) => dispatch(updateWeight(weight)),
	updateHeight: (height) => dispatch(updateHeight(height)),
	updateActivityLevel: (activityLevel) =>
		dispatch(updateActivityLevel(activityLevel)),
	updateDesiredDifficulty: (desiredDifficulty) =>
		dispatch(updateDesiredDifficulty(desiredDifficulty)),
	updateFitnessGoals: (fitnessGoals) =>
		dispatch(updateFitnessGoals(fitnessGoals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalProfile);
