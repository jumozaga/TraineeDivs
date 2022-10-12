n1 = nome1.textContent;
n2 = nome2.textContent;
n3 = nome3.textContent;

let nome = (document.getElementById("hello").innerHTML =
	"Escolha seu preferido(a) card game:" + n1 + "," + n2 + "ou " + n3);

function big(x) {
	x.style.height = "250px";
	x.style.width = "250px";
}

function small(x) {
	x.style.height = "150px";
	x.style.width = "150px";
}

let jussara,
	jesse,
	joana = 0;

let card1 = document.getElementById("1").addEventListener("click", () => {
	document.getElementById("nome1").innerHTML = "VOCÊ ME ESCOLHEU ! Vamos arrasar =*";
	document.getElementById("nome2").innerHTML = "Porquê não eu ? Eu sou ótimo, acredite !!";
	document.getElementById("nome3").innerHTML = "A vida é feita de escolhas e você fez uma ruim !";
	jussara++;
});

let card2 = document.getElementById("2").addEventListener("click", () => {
	document.getElementById("nome2").innerHTML = "VOCÊ ME ESCOLHEU !! Pessoa inteligente, vamos jogar !";
	document.getElementById("nome3").innerHTML = "Porquê não eu ? Eu sou ótima, acredite !!";
	document.getElementById("nome1").innerHTML = "A vida é feita de escolhas e você fez uma ruim !";
	jesse++;
});

let card3 = document.getElementById("3").addEventListener("click", () => {
	document.getElementById("nome3").innerHTML = "VOCÊ ME ESCOLHEU !!";
	document.getElementById("nome1").innerHTML = "Porquê não eu ? Eu sou ótima, acredite !!";
	document.getElementById("nome2").innerHTML = "A vida é feita de escolhas e você fez uma ruim !";
	joana++;
});

if (card1){
	small();
}

console.log(jussara);
