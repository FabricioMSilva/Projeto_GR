
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalhes = () => {
        const {id}= useParams()
        const [dados, setDados] = useState({});
    
        const getAllData = useCallback(() => {
            fetch("https://sheetdb.io/api/v1/vrryyqg2sfdor")
                .then((response) => response.json())
                .then((response) => {
                    const result = response.find(dados.ID === id)
                    setDados(result)
                });
        }, []);
    
        useEffect(() => {
            if (id) {
                getAllData();
            }
        }, []);
    
       
    
    return (
        <div>
            <div>
                <div className="imgCard" key={dados.ID}>
                <p className="id">'kjkj{dados?.ID}'</p>
                <p className="tituloCard">{dados.CONJUNTO}</p>
                    <img src={dados.FOTO} className="Img" alt="foto do conjunto" />
                </div></div>
        </div>
    );
}
export default Detalhes;