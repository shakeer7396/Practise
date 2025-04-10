import "./App.css";
import ParentPropsCondition, { ParentConditionalProps } from "./Components/PropsAll/ConditionalRendering/ParentProps";
import { DarkModeToggleParnt } from "./Components/PropsAll/DarkMode/DarkModeToggleParnt";
import ParentProps from "./Components/PropsAll/DefaultProps/ParentProps";
import Props from "./Components/PropsAll/ParentComponent";
import ProfileCardParent from "./Components/PropsAll/ProfileCard/ProfileCardParent";
import { ParentToogle } from "./Components/PropsAll/ToogleProps/ToogleBtn";
import Counter from "./Components/StateAll/CounterApp/Counter";
function App() {
  return (
    <div className="App">
      <h1>React Restart</h1>
      {/* <Props /> */}
      {/* <ProfileCardParent /> */}
      {/* <ParentProps /> */}
      {/* <ParentPropsCondition />  */}
      {/* <ParentConditionalProps /> */}
      {/* <ParentToogle /> */}
      {/* <DarkModeToggleParnt /> */}
      {/* ------------------------------------------------------------------------------- */}
      
   <Counter />
    </div>
  );
}

export default App;
