from vision import analizar_imagen
from db import actualizar_stock

def main():
    ruta_imagen = 'images/botella_cristal_100_100.5e31c8c214c05.avif'
    etiquetas = analizar_imagen(ruta_imagen)
    for etiqueta in etiquetas:
        print(f'Producto: {etiqueta.description}, Confianza: {etiqueta.score}')
        actualizar_stock(etiqueta.description, 1)

if __name__ == "__main__":
    main()