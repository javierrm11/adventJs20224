/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
    // obtener las horas, minutos y segundos en entero
    const [hoursW, minW, segW] = timeWorked.split(":").map(Number);
    const [hoursT, minT, segT] = totalTime.split(":").map(Number);
    // obtener el total de segundos trabajados y el total de segundos estimados
    let totalW = hoursW * 3600 + minW * 60 + segW
    let totalT = hoursT * 3600 + minT * 60 + segT
    // obtener el porcentaje completado
    let porcentaje = (totalW / totalT) * 100
    porcentaje = `${Math.round(porcentaje)}%`
    
    return porcentaje
}