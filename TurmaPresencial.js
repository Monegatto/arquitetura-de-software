import Turma from "./Turma.js"

class TurmaPresenial extends Turma{

    #frequencia

    constructor(codigo, nota, frequencia){
        super(codigo, nota)
        this.#frequencia = frequencia
    }

    get frequencia() {return this.#frequencia}

}

export default TurmaPresenial