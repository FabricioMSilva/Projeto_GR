

const enviar = ()=>{

fetch('https://sheetdb.io/api/v1/6kiwkpohsxc8v')
  .then((response) => response.json())
  .then((data) => console.log(data));
}
