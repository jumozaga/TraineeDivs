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
	document.getElementById("nome1").innerHTML = "VOCÊ ME ESCOLHEU !!";
	jussara++;
});

let card2 = document.getElementById("2").addEventListener("click", () => {
	document.getElementById("nome2").innerHTML = "VOCÊ ME ESCOLHEU !!";
	jesse++;
});

let card3 = document.getElementById("3").addEventListener("click", () => {
	document.getElementById("nome3").innerHTML = "VOCÊ ME ESCOLHEU !!";
	joana++;
});

console.log(jussara);
