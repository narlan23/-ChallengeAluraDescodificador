function criptografarTexto() {
    let texto = document.querySelector('textarea').value;
    let textoCriptografado = criptografar(texto);
    exibirTextoNaTela('#mensagem p', textoCriptografado);
}

function descriptografarTexto() {
    let texto = document.querySelector('textarea').value;
    let textoDescriptografado = descriptografar(texto); 
    exibirTextoNaTela('#mensagem p', textoDescriptografado);
}

function exibirTextoNaTela(seletor, texto) {
    let campo = document.querySelector(seletor);
    campo.textContent = texto;
}

function copiarTexto() {
    let texto = document.querySelector('#mensagem p').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}

function criptografar(texto) {
    
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoCriptografado;
}

function descriptografar(texto) {
    
    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDescriptografado;
}
