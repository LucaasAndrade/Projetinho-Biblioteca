

export function FormatarTelefone(telefone) {
    if (!telefone) return;
    telefone = telefone.replace(/\D/g,"");             //Remove tudo o que não é dígito
    telefone = telefone.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    telefone = telefone.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return telefone;
}