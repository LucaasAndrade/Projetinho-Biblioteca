


export function InverterDatas(data) {
    data = data.slice(0, 10)
    var novaData = "";
    novaData = data.split('-')
    return `${novaData[2]}/${novaData[1]}/${novaData[0]}`
}