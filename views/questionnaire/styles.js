import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#f4f4f4'
    },
    innerContainer: {
      width: '90%',
      alignSelf: 'center',
    },
    field: {
      flexDirection: 'row',
      paddingTop: 60,
      marginHorizontal: 24
    },
    text: {
      marginTop: 16,
      fontWeight: 'bold',
      position: 'absolute',
      left: 0,
    },
    input: {
      position: 'absolute',
      right: 0,
      width: '30%',
      maxWidth: 240,
      borderColor: 'black',
      borderRadius: 15
    },
    options: {
      flexDirection: 'row',
      position: 'absolute',
      right: 0
    },
    optionButton: {
      marginLeft: 12,
      borderColor: '#4B88B0',
      borderRadius: 15
    },
    optionButtonText: {
      color: '#4B88B0',
      fontSize: 12
    },
    optionButtonSelected: {
      backgroundColor: '#4B88B0',
    },
    optionButtonSelectedText: {
      color: '#f4f4f4'
    },
    nextButton: {
      position: 'absolute',
      bottom: '15%',
      backgroundColor: '#FFD10F',
      borderColor: '#FFD10F',
      alignSelf: 'center',
      borderRadius: 15
    },
    nextButtonText: {
      color: 'white',
      fontSize: 18
    },
    headingText: {
      paddingBottom: 24,
      fontSize: 18,
      position: 'absolute',
      left: 0,
    },
    subtitle: {
      marginTop: 16,
      fontWeight: 'bold',
      position: 'absolute',
      left: '28%',
    },
    slider: {
      width: 350,
      height: 40,
      marginLeft: 12,
      marginTop: 24,
    },
    activityLevels: {
      flexDirection: 'row',
      marginHorizontal: -16
    },
    activityLevel: {
      marginRight: 12,
      backgroundColor: '#4B88B0',
      height: 60,
      width: 80,
      justifyContent: 'center',
      position: 'relative',
      borderRadius: 45
    },
    sliderContainer: {
      marginTop: 24
    },
    activityLevelText: {
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    activityLevelTextSelected: {
      color: 'black'
    },
    icon: {
      alignSelf: 'center',
      paddingTop: 6,
      paddingRight: 12,
      fontSize: 24
    },
    tooltipText: {
      fontSize: 12,
      position: 'absolute',
      bottom: -48,
      left: 6
    },
    desiredDifficulty: {
      marginRight: 48,
      backgroundColor: '#4B88B0',
      height: 80,
      width: 100,
      justifyContent: 'center',
      position: 'relative',
      borderRadius: 45
    },
    desiredDifficulties: {
      flexDirection: 'row',
      marginHorizontal: -16
    },
});