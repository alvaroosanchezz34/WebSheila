# Almare Parafarmacia

Web responsive de imagen premium para Almare Parafarmacia, en La Barrosa, Chiclana de la Frontera (Cádiz). Maquetada en HTML, CSS y JavaScript sin dependencias de compilación.

## Ejecutar en local

Abre `index.html` en el navegador o levanta un servidor estático en la carpeta del proyecto, por ejemplo:

```bash
python -m http.server 8000
```

Después, visita `http://localhost:8000`.

## Personalizar antes de publicar

- **WhatsApp:** en `app.js`, sustituye `WHATSAPP_NUMBER` por el número oficial de Almare en formato internacional, sin el signo `+` ni espacios. Si queda vacío, se abre WhatsApp con el texto preparado y la persona debe elegir el contacto.
- **Datos de contacto:** el PDF facilitado no incluye teléfono, correo ni horario comercial; no se han inventado.
- **Servicios:** confirma que los equipos instalados realizan todas las mediciones descritas antes de anunciar cada función como disponible.
- **Imágenes:** las imágenes editoriales se cargan desde Unsplash y requieren conexión a internet.
- **Aspectos legales:** antes de publicar, completa aviso legal y privacidad con los datos fiscales y de tratamiento de datos del negocio.

## Contenido incluido

- Presentación: «Tu piel, nuestra especialidad».
- Filosofía de cuidado personalizado.
- Análisis facial: hidratación, sebo, apariencia de manchas/pigmentación, poros y textura, arrugas/líneas y características relacionadas con sensibilidad, según las funciones del equipo.
- Análisis capilar: cuero cabelludo, grasa, descamación, densidad aparente, fibra capilar y necesidades de cuidado.
- Asesoramiento dermocosmético, rutinas personalizadas y motivos para elegir Almare.
- Formulario de solicitud, dirección y enlace a Google Maps.

## Reservas

El formulario valida los campos obligatorios y genera un mensaje de WhatsApp. No existe un sistema de reservas, calendario ni almacenamiento conectado: la fecha solicitada queda pendiente de confirmación manual. El sitio no guarda la información del formulario en un servidor.
