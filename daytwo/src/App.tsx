import { Provider } from 'react-redux';

import store from './store';

import Main from './page/Main';

import './styles/Global.css';
import LogoIma from './assets/main-logo.png';




const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <img src={LogoIma} alt="logo" />
        <Main />
      </Provider>
    </>
  );
}

export default App;