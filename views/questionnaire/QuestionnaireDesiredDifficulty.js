import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import { updateDesiredDifficulty } from '../../redux/actions';
import styles from './styles';
import QuestionnaireTitle from './QuestionnaireTitle';
import QuestionnaireNextButton from './QuestionnaireNextButton';
import { Slider } from 'react-native';
import desiredDifficulty from '../../resources/desiredDifficulty';

class QuestionnaireDesiredDifficultyOption extends React.Component {
    render() {
        const {option, currentOption, text} = this.props;

        return(
            <View style={styles.desiredDifficulty}>
                <Text 
                    style={[
                        styles.activityLevelText,
                        currentOption === option && styles.activityLevelTextSelected
                    ]}>
                    { text }
                </Text>
            </View>
        )
    }
}

class QuestionnaireDesiredDifficulty extends React.Component {
    render() {
        const { desiredDifficulty: currentDesiredDifficulty, updateDesiredDifficulty } = this.props;

        return(
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <QuestionnaireTitle/>

                <View>
                    <Text style={styles.subtitle}>Desired workout difficulty</Text>
                </View>

                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={2}
                        step={1}
                        value={currentDesiredDifficulty}
                        onValueChange={desiredDifficulty => updateDesiredDifficulty(desiredDifficulty)}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#000000"
                    />
                    <View style={styles.desiredDifficulties}>
                        <QuestionnaireDesiredDifficultyOption
                            option={desiredDifficulty.BEGINNER}
                            currentOption={currentDesiredDifficulty}
                            text="Beginner"
                        />
                        <QuestionnaireDesiredDifficultyOption
                            option={desiredDifficulty.INTERMEDIATE}
                            currentOption={currentDesiredDifficulty}
                            text="Intermediate"
                        />
                        <QuestionnaireDesiredDifficultyOption
                            option={desiredDifficulty.EXPERIENCED}
                            currentOption={currentDesiredDifficulty}
                            text="Experienced"
                        />
                    </View>
                </View>

            </View>

            <QuestionnaireNextButton />
          </View>
        );
    }
};

const mapStateToProps = state => ({
  desiredDifficulty: state.desiredDifficulty
});

const mapDispatchToProps = dispatch => ({
    updateDesiredDifficulty: desiredDifficulty => dispatch(updateDesiredDifficulty(desiredDifficulty))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireDesiredDifficulty);