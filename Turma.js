class Turma{

    #codigo
    #nota

    constructor(codigo, nota){
        this.#codigo = codigo
        this.#nota = nota
    }

    get codigo() {return this.#codigo}
    get nota() {return this.#nota}

    aprovado (nota) {
        if (nota >= 6) return true
         else return false
    }
}

export default Turma