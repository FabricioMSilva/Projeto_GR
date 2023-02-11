


const EnviarCadastro = () => {
    

    const [MAQUINA, setMAQUINA] = useState("881");
    const [CONJUNTO, setCONJUNTO] = useState("rodolfo ");
    const [DESENHO, setDESENHO] = useState("chatao");
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
    const onChangeCRITICIDADE = (event) => { setCRITICIDADE(event.target.value); };

    const onChangeEnviar = ()=>{


        fetch('https://sheetdb.io/api/v1/6kiwkpohsxc8v', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        
                        'MAQUINA': {MAQUINA},
                        'CONJUNTO': {CONJUNTO},
                        'MINIMO': {MINIMO},
                        'DESENHO': {DESENHO},
                        'FOTO': {FOTO},
                        'DESCRIÇÃO': {DESCRICAO},
                        'CRITICIDADE':{CRITICIDADE}
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
               
 
    

    return (
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
                            type="number"
                            name="DESENHO"
                            id="DESENHO"
                            onChange={onChangeDESENHO}
                            value="1"
                        />

                    </label>
                </div>
                <div className="bloco">
                    <label htmlFor="">FOTO:
                        <input
                            type="number"
                            name="FOTO"
                            id="FOTO"
                            onChange={onChangeFOTO}
                            value="1"
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
                            value="1"
                        />
                    </label>
                </div>
                <div className="detalhes bloco">
                    <label htmlFor=""> O item é um conjunto crítico?
                        <input
                            type="checkbox"
                            name="CRITICIDADE"
                            id="CRITICIDADE"
                            onChange={onChangeCRITICIDADE}
                            value="1"
                        />

                    </label>
                    <label htmlFor="">
                        <p>Quantidade Minima:</p>
                        <input
                            type="number"
                            name="MINIMO"
                            id="MINIMO"
                            className="minimo"
                            onChange={onChangeMINIMO}
                            value="1"
                        />
                    </label>
                </div>
                <div className="center blocoBtn">
                    <button
                        className="center btn"
                        onClick={onChangeEnviar}
                        value="1"
                    >Enviar
                    </button>
                </div>
            </form>
            <br /><br />

        </div>

    );

}

export default EnviarCadastro;