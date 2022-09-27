import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     <h1>Hotels</h1>
     <Routes>
      <Route path="/" element={<Home />} />
      
     </Routes>
    </div>
  );
}

export default App;
