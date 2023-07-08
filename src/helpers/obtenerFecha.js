import { format } from 'date-fns';
import { es } from 'date-fns/locale';
// Funcion para obtener la fecha formateada
const fechaActual = () => {
    const fechaActual = new Date();
    const fechaFormateada = format(fechaActual, 'MMMM', {locale: es}); // Utilizamos el formato 'dd MMMM' para obtener el día y el mes en formato '01 enero'

    return fechaFormateada;
}

export default fechaActual;