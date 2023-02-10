import React from "react";

import "../conjuntos/conjuntos.css";


const Cadastro = () => {
    return (
        <div className="geral_Cadastro">
            <form className="container_cadastro">
                <div className="bloco center"><h1>Cadastro de Conjuntos</h1></div>
                
                <div  className="bloco">
                    <label htmlFor=""className="lbMaqina ">MAQUINA:
                        <select id="editable-select" className="combobox center ">
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
                <div  className="detalhes bloco">
                    <label htmlFor=""> O item é um conjunto crítico?
                        <input type="checkbox" name="CRITICIDADE" id="" />
                        
                    </label>
                    <label htmlFor="">
                        <p>Quantidade Minima:</p>
                        <input type="number" name="MINIMO" id="" className="minimo"/>
                    </label>
                </div>
                <div  className="center blocoBtn">
                <button className="center btn">Enviar</button></div>
            </form>
            <br/><br/>

        </div>

    )
}

export default Cadastro;