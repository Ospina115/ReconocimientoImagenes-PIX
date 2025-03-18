import mysql.connector

def conectar_db():
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="rokoopercp",
        database="inventario"
    )
    return conexion

def actualizar_stock(nombre_producto, cantidad):
    conexion = conectar_db()
    cursor = conexion.cursor()
    cursor.execute("SELECT * FROM productos WHERE nombre=%s", (nombre_producto,))
    producto = cursor.fetchone()
    if producto:
        cursor.execute("UPDATE productos SET cantidad=cantidad+%s WHERE nombre=%s", (cantidad, nombre_producto))
    else:
        cursor.execute("INSERT INTO productos (nombre, cantidad) VALUES (%s, %s)", (nombre_producto, cantidad))
    conexion.commit()
    cursor.close()
    conexion.close()