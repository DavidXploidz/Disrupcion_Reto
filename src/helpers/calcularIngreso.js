 
 const calcularIngreso = (movimientos) => {
    const ingresos = movimientos.filter(mov => mov.tipo === 'ingreso');
    const cantidades = ingresos.map(cantidad => Number(cantidad.cantidad));
    const suma = cantidades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return suma;
 }

 export default calcularIngreso;