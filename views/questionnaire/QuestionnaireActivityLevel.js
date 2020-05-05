import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'native-base';
import { connect } from 'react-redux';
import { updateActivityLevel } from '../../redux/actions';
import styles from './styles';
import QuestionnaireTitle from './QuestionnaireTitle';
import QuestionnaireNextButton from './QuestionnaireNextButton';
import { Slider } from 'react-native';
import activityLevel from '../../resources/activityLevel';


class QuestionnaireActivityLevelOption extends React.Component {
    getTooltipText() {
        const exerciseAmounts = ["0", "1-3", "3-4", "5-6"];
        return `I exercise ${exerciseAmounts[this.props.option]} times per week`;
    }

    render() {
        const { option, text, currentOption, tooltip, onTooltip } = this.props; 
        return(
            <View>   
                <View style={styles.activityLevel}>
                    <Text 
                        style={[
                            styles.activityLevelText,
                            currentOption === option && styles.activityLevelTextSelected
                        ]}>
                        { text }
                    </Text>
                </View>
                <TouchableOpacity onPress={onTooltip}>
                    <Icon style={styles.icon} type="AntDesign" name="questioncircle" />
                </TouchableOpacity>
                {tooltip === option && (
                    <Text style={styles.tooltipText}>{this.getTooltipText()}</Text>
                )}
            </View>
        )
    }
}

class QuestionnaireActivityLevel extends React.Component {
    state = {
        tooltip: activityLevel.UNDEFINED
    }

    numberInput(text) {
        return text.replace(/\D/g,'');
    }

    toggleTooltip(tooltip) {
        this.setState({tooltip: this.state.tooltip === tooltip ? activityLevel.UNDEFINED : tooltip});
    }

    updateActivityLevel(newActivityLevel) {
        this.toggleTooltip(activityLevel.UNDEFINED);
        this.props.updateActivityLevel(newActivityLevel);
    }

    render() {
        const { activityLevel: currentActivityLevel } = this.props;
        const { tooltip } = this.state;

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
                        onValueChange={activityLevel => this.updateActivityLevel(activityLevel)}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#000000"
                    />
                    <View style={styles.activityLevels}>
                        <QuestionnaireActivityLevelOption
                            text="Sedentary"
                            option={activityLevel.SEDENTARY}
                            currentOption={currentActivityLevel}
                            tooltip={tooltip}
                            onTooltip={() => this.toggleTooltip(activityLevel.SEDENTARY)}
                        />
                        <QuestionnaireActivityLevelOption
                            text="Light"
                            option={activityLevel.LIGHT}
                            currentOption={currentActivityLevel}
                            tooltip={tooltip}
                            onTooltip={() => this.toggleTooltip(activityLevel.LIGHT)}
                        />
                        <QuestionnaireActivityLevelOption
                            text="Moderate"
                            option={activityLevel.MODERATE}
                            currentOption={currentActivityLevel}
                            tooltip={tooltip}
                            onTooltip={() => this.toggleTooltip(activityLevel.MODERATE)}
                        />
                        <QuestionnaireActivityLevelOption
                            text="Active"
                            option={activityLevel.ACTIVE}
                            currentOption={currentActivityLevel}
                            tooltip={tooltip}
                            onTooltip={() => this.toggleTooltip(activityLevel.ACTIVE)}
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
  activityLevel: state.activityLevel
});

const mapDispatchToProps = dispatch => ({
  updateActivityLevel: activityLevel => dispatch(updateActivityLevel(activityLevel))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireActivityLevel);