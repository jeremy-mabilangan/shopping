import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import redux from "./src/store"
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Home' }} />
            <Stack.Screen name="Cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}