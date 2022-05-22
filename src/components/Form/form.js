import React, { useState } from "react";
import "./form.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateStringToAdd,
  updatePhrase,
  updateJavanisedPhrase,
} from "../../redux/phrasesSlice";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { javanais_generator } from "../../services/functions";

const Form = () => {
  console.log(useSelector((state) => state));

  const phraseToChange = useSelector((state) => state.phrases.phraseToChange);
  const phraseToAdd = useSelector((state) => state.phrases.stringToAdd);
  const phraseJavanised = useSelector((state) => state.phrases.javanisedPhrase);
  const [state, setState] = useState(true);
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateJavanisedPhrase(javanais_generator(phraseToChange, phraseToAdd))
    );
  };
  return (
    <main className="main">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <label htmlFor="phraseToChange">Phrase à Javaniser</label>
        <input
          aria-label="Changer la phrase"
          value={phraseToChange}
          type="text"
          name="phraseToChange"
          onChange={(e) => dispatch(updatePhrase(e.target.value))}
        />
        <label htmlFor="textToAdd">Texte à ajouter</label>

        <select
          name="textToAdd"
          id="textToAdd"
          onChange={(e) => dispatch(updateStringToAdd(e.target.value))}
        >
          <option value="ja">ja</option>
          <option value="av">av</option>
        </select>
        <button type="submit" onClick={() => setState((state) => !state)}>
          Soumettre
        </button>
      </form>

      <SwitchTransition>
        <CSSTransition
          key={state}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <div className="glassmorph">
            {phraseJavanised && <p>{phraseJavanised}</p>}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </main>
  );
};
export default Form;
