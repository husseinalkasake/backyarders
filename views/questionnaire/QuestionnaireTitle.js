import React from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import styles from './styles';

export default class QuestionnaireTitle extends React.Component {
    render() {
        return(
            <View style={styles.field}>
                <Text style={styles.headingText}>First, help us gather some of your info...</Text>
            </View>
        );
    }
};