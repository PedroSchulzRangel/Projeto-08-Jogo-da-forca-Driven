import imgForcaInicial from "../assets/forca0.png";

export default function Jogo(){
    return (
    <div class="jogo">
      <img src={imgForcaInicial} alt="imagem-forca"/>
      <button>Escolher palavra</button>
    </div>
    );
}