import "./App.css";
import Header from "../components/header/header";
import Form from "../components/Form/form";
import { javanais_generator } from "../services/functions";

function App() {
  console.log(javanais_generator("François Hollande", "av"));
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
