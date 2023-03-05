

import "./card.css";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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



  const navigate = useNavigate()
  
  const goDetalhes = (id) => {
    navigate('/Detalhes/${id}')

    }


    return (
        <div className="paiCard">
            {dados.map((item) => (
                
                <div className="geralCard" key={item.CONJUNTO} onClick={goDetalhes}>
                   
                    <div className="fotoeTitulo" key={item.CONJUNTO} >
                    <div className="ID" key={item.ID} id={item.ID}>'ID:{item.ID}'</div>
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
                        
                    */}