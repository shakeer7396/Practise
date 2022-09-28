import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
     <h1>Hotels</h1>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/adminlogin' element={<AdminLogin /> }/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Home />} /> */}
      

     </Routes>
    </div>
  );
}

export default App;
