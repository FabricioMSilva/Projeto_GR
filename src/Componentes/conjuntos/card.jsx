
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
        <div>
            {dados.map((item) => (
                <div className="geralCard">
                    <div className="imgCard">
                        <img src={`Foto: ${item.FOTO}`} alt="foto do conjunto" />
                    </div>
                    <div className="InfoCard" key={item.CONJUNTO}>
                        <h3 id="titulo">{item.CONJUNTO}</h3>
                        <h4>{`Maquina: ${item.MAQUINA} - Mínimo: ${item.MINIMO}`}</h4>
                        <h4>{`Descrição: ${item.DESCRIÇÃO}`}</h4>
                        <h4>{`Desenho: ${item.DESENHO}`}</h4>
                        <h4></h4>
                    </div>
                    <div className="btnsCard">
                        <button>Detalhes</button>
                        <button>Excluir</button>
                    </div>

                </div>
            ))}
        </div>
    );
};
export default Card;
