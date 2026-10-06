import { useState } from "react";
import "./style.css";

export default function Contador() {
    const [ contador, setContador ] = useState(0);
    const [ passo, setPasso ] = useState(1);

    function incrementar() {
        setContador(valorAnterior => valorAnterior + passo);
    }

    function decrementar() {
        setContador(valorAnterior => valorAnterior - passo);
    }

    function resetar() {
        setContador(0);
    }

    return(
        <div className="card-exemplo">

            <div className="card-header">
                <span className="badge">1.Estado Númerico</span>
                <h3>Contador com Passo Customizado</h3>
            </div>


            <div className="contador-display">
                <span className="numero-contador">{contador}</span>
            </div>


            <div className="passo-container">
                <label htmlFor="">
                    Passo do incremento:
                </label>

                <input type="number" min="1" max="10" value={passo} id="passo-input" 
                onChange={ (e)=> setPasso(Number(e.target.value)) }/>

            </div>


            <div className="botoes-grupo">
                <button className="btn btn-decrementar" onClick={decrementar}>
                     - {passo}
                </button>

                <button className="btn btn-resetar" onClick={resetar}>
                    Zerar
                </button>

                <button className="btn btn-incrementar" onClick={incrementar}>
                    + {passo}
                </button>
            </div>


            <div className="explicacaobox">
                <code>const [contador, setContador] = useState(0)</code>

                <p>
                    O estado armazena um valor numérico que é renderizado a cada alteração.
                </p>
            </div>

        </div>


        
    );




}