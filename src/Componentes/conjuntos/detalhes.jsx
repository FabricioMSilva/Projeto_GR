
import React, { useCallback, useEffect, useState } from "react";


const Detalhes = () => {

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
            <div>
                <div className="imgCard">
                    <p className="tituloCard">{item.CONJUNTO}</p>
                    <img src={item.FOTO} className="Img" alt="foto do conjunto" />
                </div></div>
        </div>
    );
}
export default Detalhes();