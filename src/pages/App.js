import "./App.css";
import { javanais_generator } from "../services/functions";
import Form from "../components/Form/form";
import Counter from "../features/counter/Counter";

function App() {
  console.log(javanais_generator("test phrase avec voyelles", "AVEC"));
  return (
    <div className="App">
      <Form />
      <Counter />
    </div>
  );
}

export default App;
