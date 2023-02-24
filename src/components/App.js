import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import { useState } from "react";

export default function App() {

const [habilitarLetras, setHabilitarLetras] = useState(
  [true, true, true, true, true, true, true, true, true, true, true, true, true, true, 
    true, true,true, true, true, true, true, true, true, true, true, true]);
const [contarErros, setContarErros] = useState(0);
const [palavraEscolhida, setPalavraEscolhida] = useState([]);
const [palavraEscondida, setPalavraEscondida] = useState([]);

  return (
  <div className="container">
      <Jogo habilitarLetras={habilitarLetras}
      setHabilitarLetras={setHabilitarLetras} 
      contarErros={contarErros} 
      palavras={palavras} 
      palavraEscolhida={palavraEscolhida} 
      setPalavraEscolhida={setPalavraEscolhida}
      palavraEscondida={palavraEscondida}
      setPalavraEscondida={setPalavraEscondida}/>
      <Letras habilitarLetras={habilitarLetras} 
      setHabilitarLetras={setHabilitarLetras} 
      palavraEscolhida={palavraEscolhida} 
      setPalavraEscolhida={setPalavraEscolhida}
      palavraEscondida={palavraEscondida}
      setPalavraEscondida={setPalavraEscondida}
      contarErros={contarErros}
      setContarErros={setContarErros}
       />
  </div>
  );
}