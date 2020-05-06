import sex from '../resources/sex';
import activityLevel from '../resources/activityLevel';
import desiredDifficulty from '../resources/desiredDifficulty';

export default defaultState = {
    age: '',
    sex: sex.UNDEFINED,
    weight: '',
    height: '',
    activityLevel: activityLevel.SEDENTARY,
    desiredDifficulty: desiredDifficulty.BEGINNER
};