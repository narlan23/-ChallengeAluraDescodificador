function criptografarTexto() {
    let texto = document.querySelector('textarea').value;
    let textoCriptografado = criptografar(texto);
    mostrarBotao();
    exibirTextoNaTela('#mensagem p', textoCriptografado);
}

function descriptografarTexto() {
    let texto = document.querySelector('textarea').value;
    let textoDescriptografado = descriptografar(texto); 
    mostrarBotao();
    exibirTextoNaTela('#mensagem p', textoDescriptografado);
}

function exibirTextoNaTela(seletor, texto) {
    aumentarFonte();
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
    let convertTexto = texto.toLowerCase();
    let textoCriptografado = convertTexto
        .replace(/[^a-z\s]/g, '')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoCriptografado;
}

function descriptografar(texto) {
    let convertTexto = texto.toLowerCase();
    let textoDescriptografado = convertTexto
        .replace(/[^a-z\s]/g, '')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDescriptografado;
}

function mostrarBotao() {
    document.getElementById('copiar').style.display = 'inline-block';
}

function aumentarFonte() {
    var mensagemElement = document.getElementById('mensagem');
    var paragrafoElement = mensagemElement.querySelector('.msg__txt');
    paragrafoElement.style.fontSize = '24px'; // Altera o tamanho da fonte para 24px
}




