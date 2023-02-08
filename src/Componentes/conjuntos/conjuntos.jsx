import { post } from "axios";

function salvar(ID,MAQUINA,CONJUNTO,MINIMO,DESENHO,FOTO,DESCRIÇÃO,DISPONIVEL,PRATELEIRA){
   
    post("https://sheetdb.io/api/v1/6kiwkpohsxc8v", {
    "data":{
        "ID":ID,
        "MAQUINA":MAQUINA,
        "CONJUNTO":CONJUNTO,
        "MINIMO":MINIMO,
        "DESENHO":DESENHO,
        "FOTO":FOTO,
        "DESCRIÇÃO":DESCRIÇÃO,
        "DISPONIVEL":DISPONIVEL,
        "PRATELEIRA":PRATELEIRA
    }
},{
    "auth":{
        "username":"{eot8z7v0}", "password":"{n1ot832zznjeu4nr6g4t}"
    }
})

}
export default salvar;

salvar("001","M631","TRANCANAGEM","10","0040-631-RB","HTTP://GOPOGLE.COM","FODASE", "EU SOU FODA","7");
console.log("consegui")