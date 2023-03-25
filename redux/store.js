import {configureStore} from '@reduxjs/toolkit';
import {returnReducer} from './reducers/returnReducer';

export const store = configureStore({
  reducer: {
    // user: userReducer,
    return: returnReducer,
  },
});

export const server = 'https://ecommerce-server-i8ns.onrender.com/api/v1';
