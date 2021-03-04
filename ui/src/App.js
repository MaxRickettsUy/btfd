import configureStore from './store'
import {Provider} from 'react-redux'
import StonksContainer from './containers/StonksContainer';
import StonksMenu from './components/StonksMenu';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <div style={{background: 'black', overflowY: 'auto'}}>
        <StonksMenu />
        <StonksContainer />
      </div>
    </Provider>

  );
}

export default App;
