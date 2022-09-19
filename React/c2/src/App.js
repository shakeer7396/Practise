import Counter from "./Counter";
import './App.css';
import {Todo} from "./Todo/Todo";

function App() {
  return (
    <div className="App">
      <h1>State & Props</h1>
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
