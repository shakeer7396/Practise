import "./App.css";
import Counter from "./Counter/Counter";
import Todo from "./Todo/Todo";
import Data from "./api/Data";
import TodoAddDelete from "./TodoAddDelete/TodoAddDelete";
import Items from "./UseContextDemo/Items";
import Cart from "./UseContextDemo/Cart";
import { CartProvider } from "./UseContextDemo/Context/Cart";


function App() {
  return (
    <CartProvider> 
      {/* App k Nder k Pure Child Components access kar sakte hai wrap karne se */ }
    <div className="App">
      {/* <Counter /> */}
      {/* <TodoAddDelete /> */}
      {/* <Todo /> */}
      {/* <Data /> */}
      {/*sending data through using props in items.jsx file */}
      <Items name="Iphone" price={100000} /> 
      <Items name="MacBook Pro" price={120000} />
      <Items name="Vivo" price={50000} />
      <Cart />
    </div>
    </CartProvider>
  );
}

export default App;
