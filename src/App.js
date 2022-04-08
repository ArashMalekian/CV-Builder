import './App.css';
import { Route, Routes} from 'react-router-dom'
import { Welcome } from './Components/Welcome/Welcome';
import { PersonalInfo } from './Components/Infos/PersonalInfo/PersonalInfo';
//contexts
import {CVContext} from './Contexts/CVContext'

function App() {
  return (
      <>
      <CVContext>
      <Routes>
        <Route path="/personalinfo" element={<PersonalInfo/>}  />
        <Route path='/' element={<Welcome/>} />
      </Routes>
      </CVContext>
      </>
  );
}

export default App;
