import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  const [name, setName] = useState("");

  const incrementarValor = () => {
    setContador(contador + 1);
  };

  // useEffect - problemático.
  // useEffect(() => {
  //   console.log("O efeito colateral foi executado", Math.random());
  // });

  // useEffect que renderiza uma única vez.
  //lembre do componentDidMount

  useEffect(() => {
    console.log("O efeito colateral foi executado");
  }, []);

  // Renderiza uma vez, e é chamado sempre que
  // o valor do estado que está no array de
  //dependência mudar

  useEffect(() => {
    if (contador % 2 === 0) {
      console.log("Hopper é muito maravilhosa.", Math.random());
    }
  }, [contador, name]);

  return (
    <div className="App">
      <h1>{contador}</h1>
      <button onClick={incrementarValor}>+</button>
    </div>
  );
}
