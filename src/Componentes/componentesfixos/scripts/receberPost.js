

const enviar = ()=>{

fetch('https://sheetdb.io/api/v1/3jl6w9or174mo')
  .then((response) => response.json())
  .then((data) => console.log(data));
}
