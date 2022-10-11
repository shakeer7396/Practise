import Breed from "./Components/Breed";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/puppy/" element={<Breed />}></Route>
        <Route path="/puppy/:id" element={<Breed />}></Route>
        <Route path="/search/" element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;
