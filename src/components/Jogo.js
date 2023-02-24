import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function Jogo({habilitarLetras, 
  setHabilitarLetras, 
  contarErros, 
  palavras, 
  palavraEscolhida, 
  setPalavraEscolhida, 
  palavraEscondida, 
  setPalavraEscondida}){

  const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

  function escolherPalavra(){

    const indiceAleatorio = Math.floor(Math.random()*palavras.length);
    const palavra = palavras[indiceAleatorio].split('');

    setPalavraEscolhida([...palavra]);

    setPalavraEscondida([...palavra.map(() => "_")]);


  }
  function habilitar(){
    setHabilitarLetras(habilitarLetras.map(() => false));
    escolherPalavra();

  }
    return (
    <>
    <div className="jogo">
      <img src={imagens[contarErros]} alt="imagem-forca"/>
      <button onClick={habilitar}>Escolher palavra</button>
    </div>
     <div className="palavra">
     {palavraEscolhida.map((letra,index) => <div key={index}>{palavraEscondida[index]}</div>)}
    </div>
    </>
    );
}