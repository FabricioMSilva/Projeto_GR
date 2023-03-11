
import React, {useState}  from "react";
import "../conjuntos/conjuntos.css";

const EnviarCadastro = () => {
    
 
    
    const [MAQUINA, setMAQUINA] = useState("");
    const [CONJUNTO, setCONJUNTO] = useState("");
    const [DESENHO, setDESENHO] = useState("");
    const [FOTO, setFOTO] = useState("");
    const [DESCRICAO, setDESCRICAO] = useState("");
    const [MINIMO, setMINIMO] = useState("");
    const [CRITICIDADE, setCRITICIDADE] = useState("");
    const onChangeMAQUINA = (event) => { setMAQUINA(event.target.value); };
    const onChangeCONJUNTO = (event) => { setCONJUNTO(event.target.value); };
    const onChangeDESENHO = (event) => { setDESENHO(event.target.value); };
    const onChangeFOTO = (event) => { setFOTO(event.target.value); };
    const onChangeDESCRICAO = (event) => { setDESCRICAO(event.target.value); };
    const onChangeMINIMO = (event) => { setMINIMO(event.target.value); };


    const onChangeEnviar = ()=>{

      
        
        fetch('https://sheetdb.io/api/v1/3jl6w9or174mo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        
                        'MAQUINA': MAQUINA,
                        'CONJUNTO': CONJUNTO,
                        'MINIMO': MINIMO,
                        'DESENHO': DESENHO,
                        'FOTO': FOTO,
                        'DESCRIÇÃO': DESCRICAO,
                        'CRITICIDADE':CRITICIDADE
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
         


         
            
        }
               
 
    

    return (
        <div className="deus">
        <div className="geral_Cadastro">
            <form className="container_cadastro">
                <div className="bloco center"><h1>Cadastro de Conjuntos</h1></div>

                <div className="bloco">
                    <label
                        htmlFor=""
                        className="lbMaqina">
                        MAQUINA:
                        <select
                            onChange={onChangeMAQUINA}
                            className="combobox center"
                            >

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
                <div className="bloco">
                    <label htmlFor="">CONJUNTO:
                        <input
                            type="text"
                            name="CONJUNTO"
                            id="CONJUNTO"
                            onChange={onChangeCONJUNTO}
                            value={CONJUNTO} />
                    </label>
                </div>
                <div className="bloco">
                    <label htmlFor="">DESENHO:
                        <input
                            type="url"
                            name="DESENHO"
                            id="DESENHO"
                            onChange={onChangeDESENHO}
                            value={DESENHO}
                        />

                    </label>
                </div>
                <div className="bloco">
                    <label htmlFor="">FOTO:
                        <input
                            type="url"
                            name="FOTO"
                            id="FOTO"
                            onChange={onChangeFOTO}
                            value={FOTO}
                        />
                    </label>
                </div>
                <div className="bloco">
                    <label htmlFor="">DESCRIÇÃO:
                        <input
                            type="text"
                            name="DESCRICAO"
                            id="DESCRICAO"
                            onChange={onChangeDESCRICAO}
                            value={DESCRICAO}
                        />
                    </label>
                </div>
                <div className="detalhes bloco">
                 
                    <label htmlFor=""  className="minimo">
                        <p>Quantidade Minima:</p>
                        <input
                            type="number"
                            name="MINIMO"
                            id="MINIMO"
                            className=""
                            onChange={onChangeMINIMO}
                            value={MINIMO}
                        />
                    </label>
                </div>
                <div className="center blocoBtn">
                    <button
                        className="center btn"
                        onClick={onChangeEnviar}
                        type="button"
                        value="1"
                    >Enviar
                    </button>
                </div>
            </form>
            <br /><br />

        </div>
</div>
    );

}

export default EnviarCadastro;