import {InputState, InputAction, InputActionTypes} from '../../types/types';

const initialState: InputState = {
    price: 3300000,
    initial: 13,
    months: 60
};

const inputReducer = (state = initialState, action: InputAction): InputState => {
    switch (action.type) {
        case InputActionTypes.INPUT_PRICE: {
            return {
                ...state,
                price: action.payload
            } 
        }
        case InputActionTypes.INPUT_INITIAL: {
            return {
                ...state,
                initial: action.payload
            } 
        }
        case InputActionTypes.INPUT_MONTHS: {
            return {
                ...state,
                months: action.payload
            } 
        }
        default: return state;
    }
};

export default inputReducer;