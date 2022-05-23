import React from "react";
import "./form.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateStringToAdd,
  updatePhrase,
  updateJavanisedPhrase,
} from "../../redux/phrasesSlice";
import { javanais_generator } from "../../services/functions";

const Form = (props) => {
  const phraseToChange = useSelector((state) => state.phrases.phraseToChange);
  const phraseToAdd = useSelector((state) => state.phrases.stringToAdd);
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
          placeholder="Phrase à javaniser"
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
        <button type="submit" onClick={() => props.setState(!props.state)}>
          Soumettre
        </button>
      </form>
    </main>
  );
};
export default Form;
