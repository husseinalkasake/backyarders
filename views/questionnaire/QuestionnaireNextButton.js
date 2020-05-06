import React from 'react';
import { Button, Text } from 'native-base';
import styles from './styles';

export default class QuestionnaireNextButton extends React.Component {
    render() {
        return(
            <Button 
                style={styles.nextButton}
                onPress={this.props.goToNextScreen}
            >
                <Text style={styles.nextButtonText}>Next</Text>
            </Button>
        );
    }
};