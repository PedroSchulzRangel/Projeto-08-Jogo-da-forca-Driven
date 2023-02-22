export default function Letras({habilitarLetras}){
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return (
    <div className="letras">
    {alfabeto.map(letraDoAlfabeto =>
    <button className={habilitarLetras ? "estado-inicial" : "jogo-iniciado"} 
    disabled={habilitarLetras}>{letraDoAlfabeto}</button>)}
    </div>
    );
}