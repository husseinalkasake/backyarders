/*
You access this page from the PersonalProfile screen.
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

function EditPersonalProfile({route, navigation}) {
    navigation.setOptions({
        title: "Edit Personal Profile",
    });

    return (
        <View style={styles.container}>
            <Text>Edit Personal Profile</Text>
            <Text>Coming Soon</Text>
        </View>
    );
}

export default EditPersonalProfile;