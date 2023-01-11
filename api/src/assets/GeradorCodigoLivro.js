

export default function GeradorDeCodigoLivro() {
    const caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var senha = "";
    for (let i = 0; i <= 3; i++) {
        senha += caracteres[Math.floor(Math.random() * 26)];       
        senha += numeros[Math.floor(Math.random() * 10)];       
        if(i == 2) break
        senha += '-';
    }
    return senha
}
