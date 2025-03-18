# Mi Proyecto

Este proyecto es un robot que escanea productos mediante imágenes, reconoce el producto y actualiza el stock correspondiente, almacena los datos mediante una base de datos local y las consulta para mostrarlos al usuario

## Tecnologías

- **Automatización:** PIX RPA (PIX Studio)
- **Reconocimiento de Imágenes:** Google Vision (API)
- **Lógica del proyecto:** Python (Visual Studio)
- **Base de Datos:** MySQL (WorkBrench)

## Instalación

1. Descarga y Extrae el repositorio o Clona el repositorio.
2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt

## Estructura del Proyecto

ReconocimientoImagenes-PIX-main/    
├─ src/  
│  ├─ db.py			Archivo para la conexión y operaciones con la DB    
│  ├─ main.py		   Archivo principal que ejecuta el robot.    
│  └─ vision.py		  Archivo para la integración con Google Vision API.    
├─ clave_api.json	     Archivo JSON con las credenciales de Google Vision API.    
├─ requirements.txt	Archivo de configuración de Node.js.    
└─ README.md	      Archivo de documentación del proyecto.