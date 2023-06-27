import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RegectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RegectedValue }>;

export class TestAsyncThynk<Return, Arg, RegectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    acttionCreator: ActionCreatorType<Return, Arg, RegectedValue>;

    constructor(acttionCreator: ActionCreatorType<Return, Arg, RegectedValue>) {
        this.acttionCreator = acttionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThynk(arg: Arg) {
        const action = this.acttionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}
