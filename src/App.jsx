import { useState } from "react";
import "./App.css";

function App() {
  // visualizar o valor, alterar o valor
  const [valor, setValor] = useState("Dimas");
  const [dados, setDados] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setValor(event.target.value);
  };

  const salvarValor = () => {
    setDados([...dados, valor]);
    setValor("");
  };

  return (
    <div className="App">
      <h2>Valor do input com React</h2>
      <input type="text" value={valor} onChange={handleChange} />
      <p>{valor}</p>
      <button className="salvar" onClick={salvarValor}>
        Salvar
      </button>
      <p>Valores salvos: {dados.join(", ")}</p>
    </div>
  );
}

export default App;
