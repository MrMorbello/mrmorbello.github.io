---
title: Shopiapp
subtitle: Descargas de Shopify
date: 2023-01-06
tags: ["webservice", "python", "interfaces"]
draft : false
---

<!-- Esta documentación quedará obsoleta tan pronto como se realicen cambios en la aplicación. En caso de actualizar, notificar a los usuarios - Gabriel P. Morbello 06.01.2023 -->

Una aplicación para descargar la información de ventas de Shopify. Eficaz y fácil de usar describen perfectamente tanto el modelo como la interfaz que resultaron al finalizar este proyecto, pero veamos un poco más allá.

# Introducción

## Motivación

Dada la tarea de raliar dashboards y análisis de los datos de ventas de Shop Nestlé en sus diferentes ubicaciones (en un principio región plata siendo, AR, UY y PY, además de la tienda específica para empleados de AR), se requieren los datos de ventas de estos ecommerce.

El proveedor de servicio Shopify sólo permite la descarga manual de una cierta cantidad de datos, y dado que no queremos tampoco realizar descargas manuales y cruzar datos, se opta por utilizar la API que brinda, y optimizar un modelo acorde a las necesidades de los análisis correspondientes.


# Uso diario

## Inicio

Para iniciar la aplicación, se debe ejecutar el script `main.py`, el cual requiere la previa presencia de la carpeta de descargas y las bases de datos de descarga con al menos una línea en ellas (indicaciones en `Reseteo de la base de datos`, nombres de archivos en `constantes.py`).

El script abrirá la ventana de la aplicación, y comenzará la descarga. Una vez finalizada, la pantalla lo indicará cambiando de color, por lo que podrá cerrar la ventana.

Para ejecutar, podría o bien tener vinculado `python.exe` para la apertura de un archivo de extensión `.py`, o bien abrir una terminar (`CMD` o `PowerShell` para Windows), **posicionarse en la misma carpeta que se encuentran los archivos**, y luego ejecutar el siguiente comando.

<pre><code>python main.py</code></pre>

## Dependencias

Se utilizan librerías propias de python, además de algunas que deben ser descargadas por separado.

Una vez instalado [Python 3.11](https://www.microsoft.com/store/productId/9NRWMJP3717K) o posterior, se deben correr los siguientes comandos en una terminal (`CMD` o `PowerShell` en Windows).

<pre><code>pip install urllib3
pip install requests
pip install numpy
pip install pandas
</code></pre>

## Reseteo de la base de datos

En caso de modificarse los campos que se traen, el formato, o querer tener acotadas las fechas de la base de datos, es necesario limpiar estos archivos de la siguiente manera:

En `sales_db` se debe introducir la fecha mínima de descarga (la máxima es la fecha y hora actuales) con el encabezado `hour` como se indica a continuación. Este dato luego debe ser borrado para que no interfiera con los datos que trae el reporte

<pre><code>hour
2023-01-13T00:00:00-03:00
</code></pre>

Mientras que en `customer_db` se debe borrar todo el contenido y dejar un dato que luego se debe borrar, como se indica a continuación.

<pre><code>customer_id
1
</code></pre>

## Sobre las constantes

Los datos relacionados con la API (Credenciales y enlaces), así como los nombres de carpetas donde se archivarán las bases de datos (con sus rutas relativas a la de la ejecución del programa), y algunas otras consideraciones varias (como la cantidad de decimales a guardar, y el separador de los archivos CSV) se almacenan en el archivo `constantes.py`, y deben ser modificadas ahí mismo. **NO realizar cambios en el modelo que generen constantes mágicas**. Esta práctica asegura el buen funcionamiento de la aplicación y una buena mantenibilidad del modelo.
