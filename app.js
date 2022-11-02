

let txt1 = document.getElementById("txt1")

let txt2 = document.getElementById("txt2")

let txt3 = document.getElementById("txt3")

let res = document.getElementById("res")

let botao = document.getElementById("botao")

let formulario = document.getElementById("forma")

let chama = document.getElementById("onome")

let mensalidade = document.querySelector("#mensalidade")

let tempo = document.querySelector("#tempo")

let total = document.getElementById("total")

let img = document.getElementById("img")



botao.addEventListener("click" , clicar)

function clicar(){
let a = txt1.value
let n2 = Number(txt2.value)
let n3 = (txt3.value)
let n4 = n2*n3

img.style.visibility = "hidden"
formulario.style.visibility = "hidden"
chama.innerHTML = `Olá ${a},  tudo bem ?`
total.innerHTML = `${a} , o valor acumulado com o senhor contribuindo ${n2}R$ durante um periodo de ${n3} meses será igual a ${n4}R$`
}


