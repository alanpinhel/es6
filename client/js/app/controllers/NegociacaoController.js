class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event) {
        event.preventDefault();

        let negociacao = this.criaNegociacao();
        console.log(negociacao);

        this.limpaFormulario();
    }

    criaNegociacao() {
        return new Negociacao(
            new Date(...this._inputData.value.split("-").map((item, indice) => item - indice % 2)),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.00;
        this._inputData.focus();
    }
}