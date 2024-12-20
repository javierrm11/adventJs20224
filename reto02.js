/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    const maxName = Math.max(...names.map(name => name.length)); // calcular nombre mas largo
    const border = '*'.repeat(maxName + 4); // 2 espacios de margen + 2 asteriscos
    let resultado = border + '\n';
    names.forEach(name => {
      const padding = ' '.repeat(maxName - name.length); // Espacios de relleno
      resultado += `* ${name}${padding} *\n`;
    });
    resultado += border;
  
    return resultado;
  }