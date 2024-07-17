function criptografarTexto() {
    let texto = document.querySelector('input').value;
    let textoCriptografado = texto; // Exemplo simples de criptografia usando Base64
    exibirTextoNaTela('#mensagem p', textoCriptografado);
}

function descriptografarTexto() {
    let texto = document.querySelector('input').value;
    let textoDescriptografado = texto; // Exemplo simples de descriptografia usando Base64
    exibirTextoNaTela('#mensagem p', textoDescriptografado);
}

function exibirTextoNaTela(seletor, texto) {
    let campo = document.querySelector(seletor);
    campo.textContent = texto;
}
