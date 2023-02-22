import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function Jogo({setHabilitarLetras, contarErros, palavras, palavraEscolhida, setPalavraEscolhida}){

  const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  function escolherPalavra(){

    const indiceAleatorio = Math.floor(Math.random()*palavras.length);
    const palavra = palavras[indiceAleatorio].split('');
    
    setPalavraEscolhida([...palavra]);
  }
  function habilitarLetras(){
    setHabilitarLetras(false);
    escolherPalavra();

  }
    return (
    <>
    <div className="jogo">
      <img src={imagens[contarErros]} alt="imagem-forca"/>
      <button onClick={habilitarLetras}>Escolher palavra</button>
    </div>
     <div className="palavra">
     {palavraEscolhida.map(letra => <div>_</div>)}
    </div>
    </>
    );
}