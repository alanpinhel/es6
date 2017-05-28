var form = document.querySelector(".form");
form.addEventListener("submit", function(event) {
	event.preventDefault();

	var data = document.querySelector("#data");
	var quantidade = document.querySelector("#quantidade");
	var valor = document.querySelector("#valor");

	var tdData = criaTd(data.value);
	var tdQuantidade = criaTd(quantidade.value);
	var tdValor = criaTd(valor.value);
	var tdVolume = criaTd(quantidade.value * valor.value);

	var tr = document.createElement("tr");

	tr.appendChild(tdData);
	tr.appendChild(tdQuantidade);
	tr.appendChild(tdValor);
	tr.appendChild(tdVolume);

	var tabela = document.querySelector(".table tbody");
	tabela.appendChild(tr);
});

function criaTd(dado) {
	var td = document.createElement("td");
	td.textContent = dado;

	return td;
}