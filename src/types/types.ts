export interface IResult {
    monthPay: number;
    totalSum: number;
};

export enum InputActionTypes {
    INPUT_PRICE = 'INPUT_PRICE',
    INPUT_INITIAL = 'INPUT_INITIAL',
    INPUT_MONTHS = 'INPUT_MONTHS',
};

export interface InputState {
    price: number;
    initial: number;
    months: number;
};

interface InputPriceAction {
    type: InputActionTypes.INPUT_PRICE;
    payload: number;
};

interface InputInitialAction {
    type: InputActionTypes.INPUT_INITIAL;
    payload: number;
};

interface InputMonthsAction {
    type: InputActionTypes.INPUT_MONTHS;
    payload: number;
};

export type InputAction = InputPriceAction | InputInitialAction | InputMonthsAction;