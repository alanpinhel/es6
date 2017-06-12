class NegociacaoService {
    constructor() {
        this.http = new HttpService();
    }

    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            this.http.get('negociacoes/semana')
                .then(negociacoes => resolve(negociacoes.map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor))))
                .catch(erro => reject('Não foi possível obter as negociações da semana'));
        });
    }

    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {
            this.http.get('negociacoes/anterior')
                .then(negociacoes => resolve(negociacoes.map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor))))
                .catch(erro => reject('Não foi possível obter as negociações da semana anterior'));
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            this.http.get('negociacoes/retrasada')
                .then(negociacoes => resolve(negociacoes.map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor))))
                .catch(erro => reject('Não foi possível obter as negociações da semana retrasada'));
        });
    }
}