import React, { useState } from "react";
import "./App.scss";
import Form from "../components/Form/form";
import Footer from "../components/Footer/footer";
import PhraseJavanised from "../components/PhraseJavanised/phraseJavanised";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <main className="main">
        <article>
          <Form state={state} setState={setState} />
          <PhraseJavanised state={state} />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
