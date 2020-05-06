/*
You access this page from the NutritionPlate to focus on this nutrution section:
- carbs
- proteins
- fibers

Then you get to choose the different options for this plate section.
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

function PlateSection({route, navigation}) {
    navigation.setOptions({
        title: "Plate Section",
    });

    return (
        <View style={styles.container}>
            <Text>Plate Section</Text>
            <Text>Coming Soon</Text>
        </View>
    );
}

export default PlateSection;