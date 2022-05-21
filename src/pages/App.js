import "./App.css";
import Form from "../components/Form/form";
import { javanais_generator } from "../services/functions";
import SideMenu from "../components/SideMenu/sideMenu";

function App() {
  console.log(javanais_generator("François Hollande", "av"));
  return (
    <div className="App">
      <Form />
      <SideMenu />
    </div>
  );
}

export default App;
