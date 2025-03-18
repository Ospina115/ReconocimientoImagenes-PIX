const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'inventario'
});

conexion.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos MySQL');
});

function actualizarStock(nombreProducto, cantidad) {
    conexion.query('SELECT * FROM productos WHERE nombre = ?', [nombreProducto], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            conexion.query('UPDATE productos SET cantidad = cantidad + ? WHERE nombre = ?', [cantidad, nombreProducto], (err, results) => {
                if (err) throw err;
                console.log('Stock actualizado');
            });
        } else {
            conexion.query('INSERT INTO productos (nombre, cantidad) VALUES (?, ?)', [nombreProducto, cantidad], (err, results) => {
                if (err) throw err;
                console.log('Producto añadido y stock actualizado');
            });
        }
    });
}

module.exports = { actualizarStock };