
import React from "react";
import "./card.css";

const Card = () => {
    fetch('https://sheetdb.io/api/v1/vrryyqg2sfdor')
    
    .then((response) => response.json())
    .then((data) => console.log(data));

    

    return (
       
        <div className="geralCard">
            <div className="imgCard"><img src="" alt="" /></div>
            <div className="InfoCard">
                <h3>jh</h3>
                <h4>Maquina:  {MAQUINA}Minimo : </h4>
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