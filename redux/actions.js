import { UPDATE_AGE, UPDATE_SEX, UPDATE_HEIGHT, UPDATE_WEIGHT } from './action_types';

export const updateAge = age => ({
    type: UPDATE_AGE,
    age
});

export const updateSex = sex => ({
    type: UPDATE_SEX,
    sex
});

export const updateWeight = weight => ({
    type: UPDATE_WEIGHT,
    weight
});

export const updateHeight = height => ({
    type: UPDATE_HEIGHT,
    height
});