/*
This page shows the personal profile of a user.
*/

import React from "react";
import { View, Keyboard, ScrollView } from "react-native";
import {
	updateActivityLevel,
	updateDesiredDifficulty,
	updateFitnessGoals,
} from "../../redux/actions";
import { connect } from "react-redux";
import { Button, Text, Picker } from "native-base";
import styles from "./styles";
import activityLevel from "../../resources/activityLevel";
import desiredDifficulty from "../../resources/desiredDifficulty";
import BasicInfoForm from "../../forms/BasicInfoForm";
import FitnessGoalsDragList from "../../forms/components/FitnessGoalsDragList";

class PersonalProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEdit: false,
			keyboardShowing: false,
		};
	}

	componentDidMount() {
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
			activityLevel: currentActivityLevel,
			desiredDifficulty: currentDesiredDifficulty,
		} = this.props;

		return (
			<ScrollView style={styles.container}>
				<BasicInfoForm isPersonalProfile={true} disabled={!isEdit} />
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
					<FitnessGoalsDragList
						disabled={!this.state.isEdit}
						fitnessGoals={this.props.fitnessGoals}
						updateFitnessGoals={this.props.updateFitnessGoals}
					/>
				)}
				<View style={styles.field}>
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
			</ScrollView>
		);
	}
}

const mapStateToProps = (state) => ({
	activityLevel: state.activityLevel,
	desiredDifficulty: state.desiredDifficulty,
	fitnessGoals: state.fitnessGoals,
});

const mapDispatchToProps = (dispatch) => ({
	updateActivityLevel: (activityLevel) =>
		dispatch(updateActivityLevel(activityLevel)),
	updateDesiredDifficulty: (desiredDifficulty) =>
		dispatch(updateDesiredDifficulty(desiredDifficulty)),
	updateFitnessGoals: (fitnessGoals) =>
		dispatch(updateFitnessGoals(fitnessGoals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalProfile);
