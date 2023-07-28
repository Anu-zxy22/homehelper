import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import NavBar from './components/home';
import Sidepan from './components/sidepan';
import Tandc from './components/tandc';
import Policy from './components/policy';
import Faq from './components/faq';
import Service from './components/service';
import Task from './components/task';
import Schedule from './components/schedule';
import Progress from './components/progress';
import Job from './components/job';
import Inventory from './components/inventory';
import Expense from './components/expense';
import Emergency from './components/emergency';
import Security from './components/security';
import { Provider } from 'react-redux';
import store from './components/store';
import Feedform from './components/feedform';
import Fasearch from './components/fasearch';





function App() {
  return (
    <Provider store={store}>
    <Router>
   
    
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<NavBar/>}/>
      <Route path='/sidepan' element={<Sidepan/>}/>
      <Route path='/tandc' element={<Tandc/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/task' element={<Task/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
      <Route path='/progress' element={<Progress/>}/>
      <Route path='/job' element={<Job/>}/>
      <Route path='/inventory' element={<Inventory/>}/>
      <Route path='/expense' element={<Expense/>}/>
      <Route path='/emergency' element={<Emergency/>}/>
      <Route path='/security' element={<Security/>}/>
      <Route path='/feedform' element={<Feedform/>}/>
      <Route path='/fasearch' element={<Fasearch/>}/>

      

      </Routes>
    </Router>
    </Provider>
  );
}

export default App