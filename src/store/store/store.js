import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//CONFIGURATION OF REDUX
//NOTE: ALL REDUCER INSIDE WHITELIST WILL PERSIST THE DATA MEANING WILL SAVE THE DATA EVEN IF YOU INTENTIONALLY EXIT THE APP, THE DATA WILL REMAIN, UNLESS CLEAR THE DATA OR UNINSTALL THE APP

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage
};

export default function configStore() {
  const logger = createLogger({ collapsed: true });
  const persistedReducer = persistReducer(rootPersistConfig, reducer);
  const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  const persistor = persistStore(store);

  return { store, persistor };
}
