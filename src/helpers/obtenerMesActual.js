
const obtenerMesActual = (months) => {
    const mes = new Date().getMonth();
    const nombreMes = months[mes];
    return nombreMes;
}

export default obtenerMesActual;