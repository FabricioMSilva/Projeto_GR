import "./detalhes.css";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalhes = () => {
    const { id } = useParams()
    const [dados, setDados] = useState({});


    const getAllData = useCallback(() => {
        fetch("https://sheetdb.io/api/v1/3jl6w9or174mo?sheet=sheet1")
            .then((response) => response.json())
            .then((response) => {
                const result = response.find(
                    (itemDaPlanilha) => itemDaPlanilha.ID === id);
                setDados(result)
            });
    }, [id]);

    useEffect(() => {
        if (id) {
            getAllData();
        }
    }, []);

    /**   codigo para lista material**/

    const [Mat, setMat] = useState([]);
    const getAllDataMat = useCallback(() => {
        fetch("https://sheetdb.io/api/v1/3jl6w9or174mo?sheet=sheet2")
        .then((response) => response.json())
        .then((response) => setMat(response));
    }, []);
    useEffect(() => {
        if (!Mat.length) {
            getAllDataMat();
        }
    }, []);

    /** const [dados, setDados] = useState([]);

    const getAllData = useCallback(() => {
        fetch("https://sheetdb.io/api/v1/3jl6w9or174mo")
          
    }, []);

    useEffect(() => {
        if (!dados.length) {
            getAllData();
        }
    });**/


    return (
        <div className="PaiDetalhe">
          <div className="geralDetalhe">
                <div className="imgDetalhes" key='${dados?.ID}'>
                    <div className="tituloIdDetalhes">
                        <p className="IdDetalhes">ID:{dados?.ID}</p>
                        <p className="tituloDetalhes">{dados?.CONJUNTO}</p>
                        <p className="subTituloDetalhes">Maquina:  {dados?.MAQUINA}</p>
                    </div>
                    <div className="containerDetalhes">
                        <div className="FotoDetalhes">
                            <img src={dados?.FOTO} className="ImgDetalhes" alt="foto do conjunto" />
                        </div>
                        <div className="DescricaoDetalhes">
                            <a href={dados?.LINKDESENHO} target="_blank" className="linkdesenho">Desenho: {dados?.DESENHO}</a>
                            <p className="linkdesenho">Qtd Min. : {dados?.MINIMO}</p>
                            <p className="linkdesenho">Saldo Disp. : {dados?.SALDO}</p>

                            <div className="tabelaDetalhe" key='${dados?.ID}'>
                                <table border="1">
                                    <thead>
                                        <tr>
                                            <th>CODIGO</th>
                                            <th>MATERIAL</th>
                                            <th>QTD JN</th>
                                            <th>VALOR</th>
                                        </tr>
                                    </thead>
                                    {Mat.filter((item) => item.ID === id).map((item) => (
                                    <tr key={item.id}>
                                            <td key={item.CODIGO}>{item?.CODIGO}</td>
                                            <td key={item.MATERIAL}>{item?.MATERIAL}</td>
                                            <td key={item.UTILIZADO}>{item?.UTILIZADO}</td>
                                    </tr>
                                    
                                    ))}
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detalhes;