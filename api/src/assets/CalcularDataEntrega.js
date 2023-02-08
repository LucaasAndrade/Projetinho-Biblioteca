


export function CalcularDataEntrega(data) {
    data = String(data);
    
    //separar como vai vir a data
    const dia = data[8] + data[9];
    const mes = data[5] + data[6];
    const ano = data[0] + data[1] + data[2] + data[3];

    let diaParaEntrega = Number(dia);
    let mesParaEntrega = Number(mes);
    let anoParaEntrega = Number(ano);

    let cont = 0;
    // Condições => Ver em que dia termina o mes
    if (mes === '02') {
        cont = diaParaEntrega + 7;
        if (cont >= 29) {
            cont -= 28;
            // if (cont === 0) cont += 1;
            diaParaEntrega = cont;
            mesParaEntrega += 1;
        } else {
            diaParaEntrega = cont;
        }
    } else if (mes === '01' || mes === '03' || mes === '05' || mes === '07' || mes === '08' || mes === '10') {
        cont = diaParaEntrega + 7;
        if (cont >= 32) {
            cont -= 31;
            diaParaEntrega = cont;
            mesParaEntrega += 1;
        } else {
            diaParaEntrega = cont;
        }
    } else if (mes === '04' || mes === '06' || mes === '09' || mes === '11') {
        cont = diaParaEntrega + 7;
        if (cont >= 31) {
            cont -= 30;
            diaParaEntrega = cont;
            mesParaEntrega += 1;
        } else {
            diaParaEntrega = cont;
        }
    } else if (mes === '12') {
        cont = diaParaEntrega + 7;
        if (cont >= 32) {
            cont -= 31;
            diaParaEntrega = cont;
            mesParaEntrega += 1;
            anoParaEntrega += 1;
        } else {
            diaParaEntrega = cont;
        }
    } else {
        throw new Error('Informe uma data válida')   
    }
    return `${anoParaEntrega}-${String(mesParaEntrega).length == 1 ? `${'0'+ String(mesParaEntrega)}` : `${mesParaEntrega}`}-${String(diaParaEntrega).length == 1 ? `${'0' + String(diaParaEntrega)}` : `${diaParaEntrega}`}`
}
