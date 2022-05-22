import React from "react";
import { useSelector } from "react-redux";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./phraseJavanised.css";

const PhraseJavanised = (props) => {
  const phraseJavanised = useSelector((state) => state.phrases.javanisedPhrase);
  return (
    <SwitchTransition>
      <CSSTransition
        key={props.state}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames="fade"
      >
        <div className="glassmorph">
          {phraseJavanised === "" ? "Résultat..." : <p>{phraseJavanised}</p>}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PhraseJavanised;
