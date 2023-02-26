export default function Letras({habilitarLetras, 
    setHabilitarLetras, 
    palavraEscolhida,  
    palavraEscondida, 
    setPalavraEscondida,
    contarErros,
    setContarErros}){

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function mostrarLetra(letra){

        const palavraRevelada = palavraEscondida;
        let contador = contarErros;

        for(let j = 0; j < palavraEscolhida.length; j++){

            if(palavraEscolhida[j] === letra){
                palavraRevelada[j] = letra;
                setPalavraEscondida([...palavraRevelada]);
            }
        }
        if(!palavraEscolhida.includes(letra)){
            contador = (contarErros + 1)
            setContarErros(contador);
        }
        return contador;
    }

    function desabilitarLetra(letra, i){
        const arrayBooleano = habilitarLetras;
        for(let j = 0; j < arrayBooleano.length; j++){
            if(j === i){
                arrayBooleano[j] = true; 
            }
        }
        setHabilitarLetras([...arrayBooleano]);
        const contador = mostrarLetra(letra);
        if(palavraEscondida.join('') === palavraEscolhida.join('') || contador === 6){
            setHabilitarLetras(habilitarLetras.map(() => true));
        }
        if(contador === 6){
            setPalavraEscondida([...palavraEscolhida]);
        }
    }

    return (
    <div className="letras">
    {alfabeto.map((letraDoAlfabeto,index) =>
    <button key={index} onClick={() => desabilitarLetra(letraDoAlfabeto,index)} className={habilitarLetras[index] ? "estado-inicial" : "jogo-iniciado"} 
    disabled={habilitarLetras[index]}>{letraDoAlfabeto}</button>)}
    </div>
    );
}