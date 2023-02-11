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
export default onChangeEnviar();