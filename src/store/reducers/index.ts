import {combineReducers} from 'redux';
import inputReducer from './inputReducer';

export const rootReducer = combineReducers({
    input: inputReducer,
});

export type RootState = ReturnType<typeof rootReducer>;