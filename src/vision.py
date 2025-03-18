from google.cloud import vision
import io

def analizar_imagen(ruta_imagen):
    client = vision.ImageAnnotatorClient()
    with io.open(ruta_imagen, 'rb') as image_file:
        content = image_file.read()
    image = vision.Image(content=content)
    response = client.label_detection(image=image)
    labels = response.label_annotations
    return labels