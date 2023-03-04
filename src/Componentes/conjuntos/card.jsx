
import React from "react";
import "./card.css";

const Card = () => {
    
    const dados = fetch('https://sheetdb.io/api/v1/vrryyqg2sfdor')
    
    .then((response) => response.json())
    .then((response)=> console.log(response))
    
    return (
       
        <div className="geralCard">
            <div className="imgCard"><img src="" alt="" /></div>
            <div className="InfoCard">
                <h3 id="titulo"  value={"fffafbriccio"}></h3>
                <h4>Maquina:  Minimo : </h4>
                <h4>Descrição:</h4>
                <h4>Desenho:</h4>
            </div>
            <div className="btnsCard">
                <button>Detalhes</button>
                <button>Excluir</button>
            </div>
        </div>
    );
}

export default Card;