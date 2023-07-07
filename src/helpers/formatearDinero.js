
const formatearDinero = (dinero) => {
    const precioFormateado = dinero.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
    });
    return precioFormateado;
}

export default formatearDinero;