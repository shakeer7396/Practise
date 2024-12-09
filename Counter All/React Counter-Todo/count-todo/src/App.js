import './App.css';
import Counter from './Counter/Counter';
import Todo from './Todo/Todo';
import Data from './api/Data';
import TodoAddDelete from './TodoAddDelete/TodoAddDelete';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <TodoAddDelete /> */}
      {/* <Todo /> */}
      <Data />
    </div>
  );
}

export default App;
