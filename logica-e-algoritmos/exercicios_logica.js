// EXERCÍCIO 1: Validador de Nota de Aluno (Lógica de Condicionais)
function validarAprovacao(nota) {
    if (nota >= 7) {
        return "Aprovado - Status esperado para QA: Sucesso";
    } else {
        return "Reprovado - Status esperado para QA: Falha";
    }
}
console.log(validarAprovacao(8));

// EXERCÍCIO 2: Verificador de E-mail Básico (Manipulação de Strings)
function validarEmail(email) {
    if (email.includes("@") && email.includes(".com")) {
        return "E-mail válido";
    } else {
        return "Erro: E-mail inválido para o sistema";
    }
}
console.log(validarEmail("anna@teste.com"));

// EXERCÍCIO 3: Verificador de Idade para Cadastro (Regra de Negócio)
function verificarIdadeCadastro(idade) {
    const idadeMinima = 18;
    if (idade >= idadeMinima) {
        return "Permitir Cadastro";
    } else {
        return "Bloquear: Usuário menor de idade";
    }
}
console.log(verificarIdadeCadastro(16));

