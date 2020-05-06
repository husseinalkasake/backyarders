/*
This page plays the workouts dynamically.
*/

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

function NutritionPlate({route, navigation}) {
    navigation.setOptions({
        title: "Today's Workout",
    });

    return (
        <View style={styles.container}>
            <Text>Today's Workout</Text>
            <Text>Coming Soon</Text>
        </View>
    );
}

export default NutritionPlate;