import './App.css';
import { Welcome } from './Components/Welcome/Welcome';
import {CVContext} from './Contexts/CVContext'

function App() {
  return (
      <>
      <CVContext>
      <Welcome />
      </CVContext>
      </>
  );
}

export default App;
