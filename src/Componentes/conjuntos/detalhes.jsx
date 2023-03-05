
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalhes = () => {
        const {id}= useParams()
        const [dados, setDados] = useState({});
    
        const getAllData = useCallback(() => {
            fetch("https://sheetdb.io/api/v1/vrryyqg2sfdor")
                .then((response) => response.json())
                .then((response) => {
                    const result = response.find(item.ID === id)
                    setDados(result)
                });
        }, []);
    
        useEffect(() => {
            if (!dados.length) {
                getAllData();
            }
        }, []);
    
       
    
    return (
        <div>
            <div>
                <div className="imgCard">
                <p className="id">{item.ID}</p>
                <p className="tituloCard">{item.CONJUNTO}</p>
                    <img src={item.FOTO} className="Img" alt="foto do conjunto" />
                </div></div>
        </div>
    );
}
export default Detalhes;