import "./App.css";
import { javanais_generator } from "../services/functions";
import Form from "../components/Form/form";

function App() {
  console.log(javanais_generator("François Hollande", "av"));
  return (
    <div className="App">
      <Form />
      <div>
        Aute sunt laboris enim quis sunt. Excepteur irure irure laborum tempor
        ullamco incididunt pariatur sint proident. Laboris veniam fugiat
        consequat elit amet nulla anim culpa officia commodo reprehenderit do.
        Ex consectetur deserunt do culpa non duis aute. Commodo occaecat
        occaecat qui cillum officia ad in nisi aute laboris sint labore quis
        voluptate. Proident ipsum ex sit consectetur ad culpa excepteur ad
        proident excepteur officia magna. Ad mollit do ex deserunt eu minim anim
        laborum cupidatat sit ut laborum amet. Magna amet anim enim veniam
        tempor. Qui velit nisi deserunt enim proident eiusmod anim. Amet Lorem
        id non esse non commodo laborum laborum enim ex. Nisi esse tempor sint
        qui tempor ea officia esse do ad irure nulla ut. Eiusmod laboris anim
        veniam id est ut voluptate reprehenderit.
      </div>
    </div>
  );
}

export default App;
