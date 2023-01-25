

export function DataAtual() {
    const data = new Date();
    
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = String(data.getFullYear());
    
    return `${ano}/${mes}/${dia}`;
}