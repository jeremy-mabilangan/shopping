
import { combineReducers } from "redux";
import cartReducer from "./cart";
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cartPersistConfig = {
    key: 'globalCart',
    storage: AsyncStorage,
    whitelist: ['cart'],
};

export default combineReducers({
    cart: cartReducer
});
