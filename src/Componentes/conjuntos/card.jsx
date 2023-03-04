

import "./card.css";
import React, { useCallback, useEffect, useState } from "react";


const Card = () => {
    const [dados, setDados] = useState([]);

    const getAllData = useCallback(() => {
        fetch("https://sheetdb.io/api/v1/vrryyqg2sfdor")
            .then((response) => response.json())
            .then((response) => setDados(response));
    }, []);

    useEffect(() => {
        if (!dados.length) {
            getAllData();
        }
    }, []);



    return (
        <div className="paiCard">
            {dados.map((item) => (
                <div className="geralCard">
                    <div className="fotoeTitulo"  >
                        <div className="imgCard">
                            <p className="tituloCard">{item.CONJUNTO}</p>
                            <img src={item.FOTO} className="Img" alt="foto do conjunto" />
                        </div>
                        <div className="InfoCard" key={item.CONJUNTO}>
                            <p>{`Maquina: ${item.MAQUINA} - Mínimo: ${item.MINIMO}`}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Card;
 {/* 
                        <div className="btnsCard">
                            <div>
                                <button>Detalhes</button>
                                <button>Excluir</button>
                            </div>
                        </div> 
                     Comentário do seu código
                    </div>
                    <div className="descricaoeDesenho">
                        <div className="InfoCard" key={item.CONJUNTO}>

                            <p>{`Maquina: ${item.MAQUINA} - Mínimo: ${item.MINIMO}`}</p>
                            <p>{`Descrição: ${item.DESCRIÇÃO}`}</p>
                            <a className="desenho" href={item.DESENHO}>Desenho: 1</a>
                            <p></p>
                        </div>

                    </div> 
                    */}