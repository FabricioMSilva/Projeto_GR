const enviar = ()=>{

fetch('https://sheetdb.io/api/v1/6kiwkpohsxc8v', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'ID': "ID",
                'MAQUINA': "MAQUINA",
                'CONJUNTO': "CONJUNTO",
                'MINIMO': "MINIMO",
                'DESENHO': "DESENHO",
                'FOTO': "FOTO",
                'DESCRIÇÃO': "DESCRIÇÃO",
                'DISPONIVEL': "DISPONIVEL",
                'PRATELEIRA': "PRATELEIRA"
            }
        ]
    })
})
    .then((response) => response.json())
    .then((data) => console.log(data));
}
  enviar()