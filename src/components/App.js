import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import { useState } from "react";

export default function App() {

const [habilitarLetras, setHabilitarLetras] = useState(true);
const [contarErros, setContarErros] = useState(0);
const [palavraEscolhida, setPalavraEscolhida] = useState([]);

  return (
  <div className="container">
      <Jogo setHabilitarLetras={setHabilitarLetras} 
      contarErros={contarErros} 
      palavras={palavras} 
      palavraEscolhida={palavraEscolhida} 
      setPalavraEscolhida={setPalavraEscolhida}/>
      <Letras habilitarLetras={habilitarLetras}/>
  </div>
  );
}