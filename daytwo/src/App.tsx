import { Provider } from 'react-redux';

import store from './store';

import Main from './page/Main';

import './styles/Global.css';
import LogoIma from './assets/main-logo.png';
import Accenture from './assets/accenture.png';



const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <img src={LogoIma} alt="logo" />
        <Main />
        <img className="accent" src={Accenture} alt="accenture" />
      </Provider>
    </>
  );
}

export default App;