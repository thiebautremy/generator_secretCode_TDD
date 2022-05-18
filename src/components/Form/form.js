import React from "react";
import "./form.css";
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
  const handleOnSubmit = (e) => {
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

      <div className="glassmorph">
        <span>testes</span>
        <p>
          Voluptate ullamco sit adipisicing nostrud sit laborum ipsum aliquip.
          Sunt incididunt pariatur id et ex proident cupidatat est tempor.
          Veniam laborum enim culpa exercitation aliquip minim nostrud occaecat
          elit laboris deserunt. Minim cillum culpa non pariatur occaecat. Et
          anim culpa commodo nisi qui duis ad consequat minim eiusmod. Nostrud
          cupidatat eiusmod et voluptate minim. Cillum consectetur consectetur
          id et ex enim sunt laboris esse do mollit. Esse elit est do sit mollit
          magna est cillum id enim sint exercitation cillum. Magna irure
          cupidatat qui deserunt ut veniam consectetur excepteur nisi in do
          officia. Aliquip non in eiusmod culpa aliquip ullamco ullamco magna
          nostrud fugiat. Magna deserunt consequat nostrud labore reprehenderit
          consequat consequat sit.{" "}
        </p>
      </div>
    </form>
  );
};
export default Form;
