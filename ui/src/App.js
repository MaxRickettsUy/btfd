import StonksContainer from './containers/StonksContainer';
import StonksMenu from './components/StonksMenu';
import './App.css';

function App() {
  return (
    <div style={{background: 'black'}}>
      <StonksMenu />
      <StonksContainer />
    </div>
  );
}

export default App;