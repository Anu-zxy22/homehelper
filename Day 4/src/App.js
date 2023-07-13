import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import NavBar from './components/home';
import Sidepan from './components/sidepan';


function App() {
  return (
    <Router>
   
    
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<NavBar/>}/>
      <Route path='/sidepan' element={<Sidepan/>}/>
      

      </Routes>
    </Router>
  );
}

export default App