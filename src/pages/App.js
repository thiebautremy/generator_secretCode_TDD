import React, { useState } from "react";
import "./App.css";
import Form from "../components/Form/form";
import SideMenu from "../components/SideMenu/sideMenu";
import Footer from "../components/Footer/footer";
import PhraseJavanised from "../components/PhraseJavanised/phraseJavanised";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <div className="sideMenuContainer">
        <SideMenu />
      </div>
      <div className="container">
        <section>
          <h1>Générateur Javanais...</h1>
        </section>
        <article>
          <Form state={state} setState={setState} />

          <PhraseJavanised state={state} />
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default App;
