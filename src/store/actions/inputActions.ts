import { InputActionTypes } from '../../types/types';

export const ACTION_PRICE = (price: number) => {
    return {
        type: InputActionTypes.INPUT_PRICE,
        payload: price
    }
};

export const ACTION_INITIAL = (initial: number) => {
    return {
        type: InputActionTypes.INPUT_INITIAL,
        payload: initial
    }
};

export const ACTION_MONTHS = (months: number) => {
    return {
        type: InputActionTypes.INPUT_MONTHS,
        payload: months
    }
};