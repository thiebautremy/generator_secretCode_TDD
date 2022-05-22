import React, { useState } from "react";
import "./sideMenu.css";

const SideMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <aside className="side-menu">
      <div
        className={open ? "button open" : "button"}
        onClick={() => setOpen(!open)}
      >
        <p>
          Le javanais ou langue de feu, apparu en France dans la dernière moitié
          du XIXe siècle, est un procédé de codage argotique utilisant une
          phonologie parasitaire constituée par l'insertion d'une syllabe
          supplémentaire entre voyelles et consonnes, dans le but de rendre ce
          texte moins compréhensible aux non initiés. Cette syllabe comporte un
          son lié au nom de la variante : « ja » ou « av »
        </p>
        <div className="divider"></div>
        <span>?</span>
      </div>
    </aside>
  );
};

export default SideMenu;
