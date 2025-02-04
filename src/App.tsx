import React, { useReducer } from 'react';
import { UserContext, UserReducer, initialUserState } from './components/User';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './Routes';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(UserReducer, initialUserState);

  return (
    <Provider store={store}>
      <UserContext value={[state, dispatch]}>
     <Routes/>
      </UserContext>
    </Provider>
  )
}
export default App;
