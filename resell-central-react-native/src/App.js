import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import './Translations'
import DrawerNavigation from './Navigators/Drawer'
import {NavigationContainer} from '@react-navigation/native';
import Inventory from './screens/Inventory/Inventory'
import ProductDetails from './screens/ProductDetails/ProductDetails'

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
    <PersistGate loading={null} persistor={persistor}>
      {/* <DrawerNavigation /> */}
      <ProductDetails />
    </PersistGate>
    </NavigationContainer>
  </Provider>
)

export default App