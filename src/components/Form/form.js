import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateStringToAdd,
  updatePhrase,
  updateJavanisedPhrase,
} from "../../redux/phrasesSlice";
import { javanais_generator } from "../../services/functions";

const Form = () => {
  const phraseToChange = useSelector((state) => state.phrases.phraseToChange);
  const phraseToAdd = useSelector((state) => state.phrases.stringToAdd);
  const dispatch = useDispatch();
  console.log(phraseToChange);
  const handleOnSubmit = (e) => {
    console.log(e);
    console.log(javanais_generator(phraseToChange, phraseToAdd));

    e.preventDefault();
    dispatch(
      updateJavanisedPhrase(javanais_generator(phraseToChange, phraseToAdd))
    );
  };
  return (
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
      <input
        name="textToAdd"
        aria-label="Changer la phrase à ajouter"
        value={phraseToAdd}
        type="text"
        onChange={(e) => dispatch(updateStringToAdd(e.target.value))}
      />
      <button type="submit">Soumettre</button>
    </form>
  );
};
export default Form;
