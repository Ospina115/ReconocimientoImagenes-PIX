const { analizarImagen } = require('./vision');
const { actualizarStock } = require('./db');

async function main() {
    const rutaImagen = 'ruta/a/tu/imagen.jpg';
    const etiquetas = await analizarImagen(rutaImagen);
    etiquetas.forEach((etiqueta) => {
        console.log(`Producto: ${etiqueta.description}, Confianza: ${etiqueta.score}`);
        actualizarStock(etiqueta.description, 1);
    });
}

main().catch(console.error);