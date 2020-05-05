import { UPDATE_AGE, UPDATE_SEX, UPDATE_HEIGHT, UPDATE_WEIGHT } from './action_types';
import defaultState from './state';

export default rootReducer = (state = defaultState, action) => {
    switch (action.type) {
      case UPDATE_AGE:
        return {
            ...state,
            age: action.age,
        };
    case UPDATE_SEX:
        return {
            ...state,
            sex: action.sex
        };
    case UPDATE_WEIGHT:
        return {
            ...state,
            weight: action.weight
        };
    case UPDATE_HEIGHT:
        return {
            ...state,
            height: action.height
        };
        default:
            return state;
    }
};