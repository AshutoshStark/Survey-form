import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import SurveyForm from './page/SurveyForm';
import { useUser } from './GolobelContext/UserContext';
import UserProfile from './Components/UserProfile';


function App() {

  const {user} = useUser();

  return (
   <MainDiv>
    <Toaster/>
   { user?.name==='Guest' ? <UserProfile/> : <SurveyForm/> }
   </MainDiv>
  );
}

const MainDiv = styled.div`

`

export default App;
