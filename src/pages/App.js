import "./App.css";
import { javanais_generator } from "../services/functions";
import Form from "../components/Form/form";

function App() {
  console.log(javanais_generator("test phrase avec voyelles", "AVEC"));
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
