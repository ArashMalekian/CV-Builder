import './App.css';
import { Route, Routes} from 'react-router-dom'
import { Welcome } from './Components/Welcome/Welcome';
import { PersonalInfo } from './Components/Infos/PersonalInfo/PersonalInfo';
//contexts
import {CVContext} from './Contexts/CVContext'
import { PersonalInfoContext } from './Contexts/PersonalInfoContext';
import { StateContext } from './Contexts/StateContext';
import { EducationAndCertificationInfo } from './Components/Infos/Education&CertificationInfo/EducationAndCertificationInfo';
import { EduAndCerContext } from './Contexts/EduAndCerContext';

function App() {
  return (
      <>
      <EduAndCerContext>
      <StateContext>
      <PersonalInfoContext>
      <CVContext>
      <Routes>
        <Route path="/personalinfo" element={<PersonalInfo/>}  />
        <Route path="/EduAndCertificationinfo" element={<EducationAndCertificationInfo />}  />
        <Route path='/' element={<Welcome/>} />
      </Routes>
      </CVContext>
      </PersonalInfoContext>
      </StateContext>
      </EduAndCerContext>
      </>
  );
}

export default App;
