class NegociacaoService {
    constructor() {
        this.http = new HttpService();
    }

    obterNegociacoesDaSemana() {
        return this.http.get('negociacoes/semana')
            .then(negociacoes => {
                return negociacoes.map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor))
            })
            .catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana')
            });
    }

    obterNegociacoesDaSemanaAnterior() {
        return this.http.get('negociacoes/anterior')
            .then(negociacoes => {
                return negociacoes.map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor));
            })
            .catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana anterior');
            });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return this.http.get('negociacoes/retrasada')
            .then(negociacoes => {
                return negociacoes.map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor));
            })
            .catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana retrasada');
            });
    }

    obterNegociacoes() {
        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {
            let negociacoes = periodos.reduce((dados, periodo) => dados.concat(periodo), []);
            return negociacoes;
        })
        .catch(erro => {
            throw new Erro(erro);
        });
    }
}