import React, { useReducer } from 'react';
import { userContext, UserReducer, initialUserState } from './components/User';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './Routes';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(UserReducer, initialUserState);

  return (
    <Provider store={store}>
      <userContext.Provider value={[state, dispatch]}>
     <Routes/>
      </userContext.Provider>
    </Provider>
  )
}
export default App;
