import React from "react";

import "../conjuntos/conjuntos.css";


const Cadastro = () => {
    return (
        <div className="geral_Cadastro">
            <form className="container_cadastro">
                <div className="bloco"><h1>Cadastro de Conjuntos</h1></div>
                <div className="bloco">
                    <label htmlFor="id"> ID:
                        <input type="text" name="ID" id="" />
                    </label>
                </div>
                <div  className="bloco">
                    <label htmlFor="">MAQUINA:
                        <select id="editable-select">
                            <option>M32</option>
                            <option>M40</option>
                            <option>M661</option>
                            <option>M48</option>
                            <option>MTT99</option>
                            <option>M641</option>
                            <option>M536</option>
                            <option>M556</option>
                            <option>M561</option>
                            <option>OZCAMS</option>
                        </select>
                    </label>
                </div>
                <div  className="bloco">
                    <label htmlFor="">CONJUNTO:
                        <input type="text" name="CONJUNTO" id="" />
                    </label>
                </div>
                <div  className="bloco">
                    <label htmlFor="">MINIMO:
                        <input type="number" name="MINIMO" id="" />
                    </label>
                </div>
                <div  className="bloco">
                    <label htmlFor="">DESENHO:
                        <input type="url" name="DESENHO" id="" />
                    </label>
                </div>
                <div  className="bloco">
                    <label htmlFor="">FOTO:
                        <input type="url" name="FOTO" id="" />
                    </label>
                </div>
                <div  className="bloco">
                    <label htmlFor="">DESCRIÇÃO:
                        <input type="text" name="DESCRICAO" id="" />
                    </label>
                </div>
                <div  className="bloco">
                    <label htmlFor=""> TRATA-SE DE UM CONJUNTO CRITICO:
                        <input type="checkbox" name="CRITICIDADE" id="" />SIM
                    </label>
                </div>
                <div  className="bloco">
                <button>Enviar</button></div>
            </form>

        </div>

    )
}

export default Cadastro;