import React, { useState } from "react";
import "./App.css";
import Form from "../components/Form/form";
import { javanais_generator } from "../services/functions";
import SideMenu from "../components/SideMenu/sideMenu";
import Footer from "../components/Footer/footer";
import PhraseJavanised from "../components/PhraseJavanised/phraseJavanised";

function App() {
  const [state, setState] = useState(true);
  console.log(javanais_generator("François Hollande", "av"));
  return (
    <div className="App">
      <Form state={state} setState={setState} />
      <div className="sideMenuContainer">
        <SideMenu />
      </div>
      <PhraseJavanised state={state} />
      <Footer />
    </div>
  );
}

export default App;
