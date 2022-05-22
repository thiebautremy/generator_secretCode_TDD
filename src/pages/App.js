import "./App.css";
import Form from "../components/Form/form";
import { javanais_generator } from "../services/functions";
import SideMenu from "../components/SideMenu/sideMenu";
import Footer from "../components/Footer/footer";

function App() {
  console.log(javanais_generator("François Hollande", "av"));
  return (
    <div className="App">
      <Form />
      <div className="sideMenuContainer">
        <SideMenu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
