import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUserProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUserProps, {rejectValue: string} >(
    'login/loginByUserName',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post<User>(
                'http://localhost:8000/login',
                authData,
            );
            if (!response.data) {
                throw new Error('error');
            }
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
            thunkApi.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue('error');
        }
    },
);
