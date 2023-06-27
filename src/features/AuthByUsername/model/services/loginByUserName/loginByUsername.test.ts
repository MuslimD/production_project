import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThynk } from 'shared/lib/tests/TestAsyncThynk/TestAsyncThynk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername.test', () => {
    test('succes login', async () => {
        const userValue = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const thynk = new TestAsyncThynk(loginByUsername);
        const result = await thynk.callThynk({ username: '123', password: '123' });
        expect(thynk.dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue),
        );
        expect(thynk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });
    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thynk = new TestAsyncThynk(loginByUsername);
        const result = await thynk.callThynk({ username: '123', password: '123' });
        expect(thynk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
