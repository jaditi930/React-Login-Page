import logo from '../logo.svg';
import '../App.css';
import Login from './Login';
import SuccessPage from './SuccessPage';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route path="/success" element={<SuccessPage/>}></Route>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
