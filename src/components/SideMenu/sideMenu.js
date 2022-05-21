import React from "react";
import "./sideMenu.css";

const SideMenu = () => {
  return (
    <aside className="side-menu">
      <button>
        <p>
          Le javanais ou langue de feu, apparu en France dans la dernière moitié
          du XIXe siècle, est un procédé de codage argotique utilisant une
          phonologie parasitaire constituée par l'insertion d'une syllabe
          supplémentaire entre voyelles et consonnes, dans le but de rendre ce
          texte moins compréhensible aux non initiés. Cette syllabe comporte un
          son lié au nom de la variante : « ja » ou « av »
        </p>
        <span>?</span>
      </button>
    </aside>
  );
};

export default SideMenu;
