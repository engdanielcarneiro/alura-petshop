import React from "react";
import "../assets/css/404.css";
import imagem from "../assets/img/doguito404.svg";

const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={imagem} alt="Ilustração doguito" />
      <p className="naoencontrado-texto">This page doesn't exist!</p>
    </main>
  );
};

export default Pagina404;
