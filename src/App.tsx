import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './navigation/navigation';
import { Provider } from 'react-redux';
import store from './reduxtoolkit/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
