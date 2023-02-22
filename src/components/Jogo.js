import forca0 from "../assets/forca0.png";

export default function Jogo({setHabilitarLetras, contarErros, palavras}){

  function escolherPalavra(){
    const palavra = (palavras[Math.floor(Math.random()*palavras.length)]).split('');
    console.log(palavra);
    return palavra;
  }
  function habilitarLetras(){
    setHabilitarLetras(false);
    const palavraEscolhida = escolherPalavra();

  }
    return (
    <div className="jogo">
      <img src={forca0} alt="imagem-forca"/>
      <button onClick={habilitarLetras}>Escolher palavra</button>
    </div>
    );
}