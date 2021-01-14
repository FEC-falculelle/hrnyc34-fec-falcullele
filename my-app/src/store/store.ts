import { createStore, ThunkAction, Action, applyMiddleware } from '@reduxjs/toolkit';
import RootReducer from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


let exampleData = 'This is coming from the Redux store XD';

interface Store {
  "exampleData": string;
}

let storeData: Store = {
  "exampleData": exampleData
}

export const store = createStore(
  RootReducer, composeWithDevTools(applyMiddleware(thunk))
);

export type RootStore = ReturnType <typeof RootReducer>;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
