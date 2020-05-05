import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import { updateActivityLevel } from '../../redux/actions';
import styles from './styles';
import QuestionnaireTitle from './QuestionnaireTitle';
import QuestionnaireNextButton from './QuestionnaireNextButton';
import { Slider } from 'react-native';
import activityLevel from '../../resources/activityLevel';

class QuestionnaireActivityLevel extends React.Component {
    numberInput(text) {
        return text.replace(/\D/g,'');
    }

    render() {
        const { activityLevel: currentActivityLevel } = this.props;
        return(
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <QuestionnaireTitle/>

                <View>
                    <Text style={styles.subtitle}>Current activity level</Text>
                </View>

                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={3}
                        step={1}
                        value={this.props.activityLevel}
                        onValueChange={activityLevel => this.props.updateActivityLevel(activityLevel)}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#000000"
                    />
                    <View style={styles.activityLevels}>
                        <View style={styles.activityLevel}>
                            <Text 
                                style={[
                                    styles.activityLevelText,
                                    currentActivityLevel === activityLevel.SEDENTARY && styles.activityLevelTextSelected
                                ]}>
                                Sedentary
                            </Text>
                        </View>
                        <View style={styles.activityLevel}>
                            <Text 
                                style={[
                                    styles.activityLevelText,
                                    currentActivityLevel === activityLevel.LIGHT && styles.activityLevelTextSelected
                                ]}>
                                Light
                            </Text>
                        </View>
                        <View style={styles.activityLevel}>
                            <Text 
                                style={[
                                    styles.activityLevelText,
                                    currentActivityLevel === activityLevel.MODERATE && styles.activityLevelTextSelected
                                ]}>
                                Moderate
                            </Text>
                        </View>
                        <View style={styles.activityLevel}>
                            <Text 
                                style={[
                                    styles.activityLevelText,
                                    currentActivityLevel === activityLevel.ACTIVE && styles.activityLevelTextSelected
                                ]}>
                                Active
                            </Text>
                        </View>
                    </View>
                </View>

            </View>

            <QuestionnaireNextButton />
          </View>
        );
    }
};

const mapStateToProps = state => ({
  activityLevel: state.activityLevel
});

const mapDispatchToProps = dispatch => ({
  updateActivityLevel: activityLevel => dispatch(updateActivityLevel(activityLevel))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireActivityLevel);