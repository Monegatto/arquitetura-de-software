class Aluno{
    nome
    login
    RA

    constructor(nome, login, RA){
        this.nome = nome
        this.login = login
        this.RA = RA
    }

    get nome() {return this.nome}
    get login() {return this.login}
    get RA() {return this.RA}

}

export default Aluno