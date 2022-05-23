import React from "react";
import { FaLinkedinIn, FaGithub, FaIdBadge } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="https://thiebautremy.netlify.app/">
        <FaIdBadge />
      </a>
      <a href="https://www.linkedin.com/in/remy-thiebaut/">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/thiebautremy">
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
