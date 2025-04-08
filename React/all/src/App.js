import "./App.css";
import Props from "./Components/PropsAll/ParentComponent";
import ProfileCardParent from "./Components/PropsAll/ProfileCard/ProfileCardParent";

function App() {
  return (
    <div className="App">
      <h1>React Restart</h1>
      {/* <Props /> */}
      <ProfileCardParent />
    </div>
  );
}

export default App;
