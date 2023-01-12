
import { GeradorNumeroAleatorio } from "./GeradorNumeroAleatorio.js";

export function GeradorDeCodigo(limite) {
    const caracteres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var senha = "";
    var escolha = 0;
    for (let i = 1; i <= limite; i++) {
        escolha = GeradorNumeroAleatorio(5)
        if (escolha % 2 === 0) {
            senha += caracteres[GeradorNumeroAleatorio(26)];
        }
        else {
            senha += numeros[GeradorNumeroAleatorio(9)];
        }
    }
    return senha
}

