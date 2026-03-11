let minutos=10
let segundos=0

function atualizarTimer(){

if(segundos==0){

if(minutos==0){
return
}

minutos--
segundos=59

}else{

segundos--

}

document.getElementById("countdown").innerHTML=
minutos+"m "+segundos+"s"

}

setInterval(atualizarTimer,1000)



function viewers(){

let v=Math.floor(Math.random()*20)+8

document.getElementById("viewers").innerHTML=v

}

setInterval(viewers,4000)

viewers()



let nomes=[

"Maria",
"João",
"Ana",
"Lucas",
"Pedro",
"Juliana",
"Mateus",
"Fernanda"

]

function popup(){

let nome=nomes[Math.floor(Math.random()*nomes.length)]

let p=document.getElementById("popup")

p.innerHTML="✅ "+nome+" acabou de comprar"

p.style.display="block"

setTimeout(()=>{

p.style.display="none"

},3000)

}

setInterval(popup,15000)
