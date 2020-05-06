import React from 'react';
import { AppLoading } from 'expo';
import { Container } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';


// Questionnaire
import QuestionnaireIntro from './views/questionnaire/QuestionnaireIntro';
import QuestionnaireActivityLevel from './views/questionnaire/QuestionnaireActivityLevel';
// import QuestionnaireFitnessGoals from './views/questionnaire/QuestionnaireFitnessGoals';
import QuestionnaireDesiredDifficulty from './views/questionnaire/QuestionnaireDesiredDifficulty';

const QuestionnaireStack = createStackNavigator(); // This stack Object is what we use to do all our questionnaire navigation

function Questionnaire() {
  return (
      <QuestionnaireStack.Navigator initialRouteName="Welcome">
        <QuestionnaireStack.Screen name="Intro" component={QuestionnaireIntro} options={{title: "General Info"}}/>
        <QuestionnaireStack.Screen name="ActivityLevel" component={QuestionnaireActivityLevel} options={{title: "Current Activity Level"}}/>
        {/* <QuestionnaireStack.Screen name="FitnessGoal" component={QuestionnaireFitnessGoals} /> */}
        <QuestionnaireStack.Screen name="DesiredDifficulty" component={QuestionnaireDesiredDifficulty} options={{title: "Desired Difficulty"}}/>
      </QuestionnaireStack.Navigator>
  );
}

// Daily Workout
import WeekWorkouts from './views/dailyWorkout/WeekWorkouts';
import TodaysWorkout from './views/dailyWorkout/TodaysWorkout';

const DailyWorkoutStack = createStackNavigator(); // this stack object lets user navigate in daily workout

function DailyWorkout() {
  return (
    <DailyWorkoutStack.Navigator initialRouteName="WeekWorkouts">
      <DailyWorkoutStack.Screen name="WeekWorkouts" component={WeekWorkouts} />
      <DailyWorkoutStack.Screen name="TodaysWorkout" component={TodaysWorkout} />
    </DailyWorkoutStack.Navigator>
  );
}

// Workout Profiles
import WorkoutsList from './views/workoutProfile/WorkoutsList';
import WorkoutProfile from './views/workoutProfile/WorkoutProfile';

const WorkoutProfileStack = createStackNavigator(); // this stack object lets user navigate in workout profiels

function WorkoutsProfile() {
  return (
    <WorkoutProfileStack.Navigator initialRouteName="WorkoutsList">
      <WorkoutProfileStack.Screen name="WorkoutsList" component={WorkoutsList} initialParams={{ sortBy: "alphabetical"}} />
      <WorkoutProfileStack.Screen name="WorkoutProfile" component={WorkoutProfile} />
    </WorkoutProfileStack.Navigator>
  );
}

// Nutrition
import NutritionPlate from './views/nutrition/NutritionPlate';
import PlateSection from './views/nutrition/PlateSection';

const NutritionStack = createStackNavigator(); // this stack object lets user navigate in nutrition

function Nutrition() {
  return (
    <NutritionStack.Navigator initialRouteName="WorkoutsList">
      <NutritionStack.Screen name="NutritionPlate" component={NutritionPlate} />
      <NutritionStack.Screen name="PlateSection" component={PlateSection} />
    </NutritionStack.Navigator>
  );
}

// Personal Profile
import PersonalProfileScreen from './views/personalProfile/PersonalProfile';
import EditPersonalProfile from './views/personalProfile/EditPersonalProfile';

const PersonalProfileStack = createStackNavigator(); // this stack object lets user personal profile in nutrition

function PersonalProfile() {
  return (
    <PersonalProfileStack.Navigator initialRouteName="PersonalProfile">
      <PersonalProfileStack.Screen name="PersonalProfile" component={PersonalProfileScreen} />
      <PersonalProfileStack.Screen name="EditPersonalProfile" component={EditPersonalProfile} />
    </PersonalProfileStack.Navigator>
  );
}

// Main navigation Tab
const Tab = createBottomTabNavigator(); // the main tab navigation object of the app

function MainNav() {
  return (
    <Tab.Navigator 
      initialRouteName="WeekWorkouts"
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'WeekWorkouts') {
              iconName = focused ? 'ios-fitness' : 'ios-fitness';
            } else if (route.name === 'WorkoutsList') {
              iconName = focused ? 'ios-search' : 'ios-search';
            } else if (route.name === 'NutritionPlate') {
              iconName = focused ? 'ios-restaurant' : 'ios-restaurant';
            } else if (route.name === 'PersonalProfile') {
              iconName = focused ? 'ios-contact' : 'ios-contact';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
    >
      <Tab.Screen name="WeekWorkouts" component={DailyWorkout} />
      <Tab.Screen name="WorkoutsList" component={WorkoutsProfile}/>
      <Tab.Screen name="NutritionPlate" component={Nutrition}/>
      <Tab.Screen name="PersonalProfile" component={PersonalProfile}/>
    </Tab.Navigator>
  );
}

// TODO read this value from the stored user profile
// const isFirstTimeToUseApp = false;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isFirstTimeToUseApp: true, // TODO read this value from the stored user profile and update it from the end of quetionnaire
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Container>
          <NavigationContainer>
          { this.state.isFirstTimeToUseApp
            ? <Questionnaire />
            : <MainNav />
          }
          </NavigationContainer>
        </Container>
      </Provider>
    );
  }
}
