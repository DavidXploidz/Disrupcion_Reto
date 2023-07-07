 
 const calcularGasto = (movimientos) => {
    const gastos = movimientos.filter(mov => mov.tipo === 'gasto');
    const cantidades = gastos.map(cantidad => Number(cantidad.cantidad));
    const suma = cantidades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return suma
 }

 export default calcularGasto;