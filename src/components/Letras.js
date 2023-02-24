export default function Letras({habilitarLetras, 
    setHabilitarLetras, 
    palavraEscolhida, 
    setPalavraEscolhida, 
    palavraEscondida, 
    setPalavraEscondida,
    contarErros,
    setContarErros}){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function mostrarLetra(letra,i){

        const palavraRevelada = palavraEscondida;

        for(let j = 0; j < palavraEscolhida.length; j++){

            if(palavraEscolhida[j] === letra){
                palavraRevelada[j] = letra;
                setPalavraEscondida([...palavraRevelada]);
            }
        }
        if(!palavraEscolhida.includes(letra)){
            setContarErros(contarErros + 1);
        }
    }

    function desabilitarLetra(letra, i){
        const arrayBooleano = habilitarLetras;
        for(let j = 0; j < arrayBooleano.length; j++){
            if(j === i){
                arrayBooleano[j] = true; 
            }
        }
        setHabilitarLetras([...arrayBooleano]);
        mostrarLetra(letra,i);
    }

    return (
    <div className="letras">
    {alfabeto.map((letraDoAlfabeto,index) =>
    <button key={index} onClick={() => desabilitarLetra(letraDoAlfabeto,index)} className={habilitarLetras[index] ? "estado-inicial" : "jogo-iniciado"} 
    disabled={habilitarLetras[index]}>{letraDoAlfabeto}</button>)}
    </div>
    );
}