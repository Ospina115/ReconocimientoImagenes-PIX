const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({
    keyFilename: 'ruta/a/tu/clave_api.json'
});

async function analizarImagen(rutaImagen) {
    const [result] = await client.labelDetection(rutaImagen);
    const etiquetas = result.labelAnnotations;
    return etiquetas;
}

module.exports = { analizarImagen };