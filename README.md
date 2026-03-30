# Las Tuerces

Sitio web academico sobre el Paisaje Natural de Las Tuerces (Palencia), desarrollado para la asignatura Herramientas HTML y CSS II.

El proyecto parte de UOC Boilerplate, pero su contenido, estructura visual y funcionalidades estan adaptados a una landing informativa y de divulgacion turistica.

## Objetivo

Crear una web de una sola pagina que presente Las Tuerces con una experiencia clara y responsive, incluyendo:

- Hero de bienvenida con llamada a la accion.
- Secciones de formacion geologica, rutas y consejos de visita.
- Galeria fotografica.
- Bloque de informacion util con mapa interactivo.
- Navegacion adaptable a movil y escritorio.

## Tecnologias

- HTML5 con parciales mediante PostHTML (`header.html` y `footer.html`).
- SCSS modular con variables, funciones y layout principal.
- JavaScript ES modules para interaccion de menu y logica del mapa.
- Leaflet para el mapa interactivo de localizacion.
- Font Awesome para iconografia.
- Parcel 2 para entorno de desarrollo y build de produccion.

## Requisitos

- Node.js 18 o superior.
- npm.

## Puesta en marcha

1. Instala dependencias:

   ```bash
   npm install
   ```

2. Inicia el entorno de desarrollo:

   ```bash
   npm run dev
   ```

3. Abre la URL local mostrada por Parcel (servidor en el puerto `8123`).

## Scripts disponibles

| Script | Descripcion |
| --- | --- |
| `npm run dev` | Limpia caches y lanza servidor de desarrollo en caliente. |
| `npm run build` | Genera version optimizada para produccion en `dist/`. |
| `npm run clean` | Elimina `dist/` y caches de Parcel. |
| `npm run stylelint` | Ejecuta lint sobre todos los archivos SCSS. |
| `npm run test` | Comprobacion basica de entorno (mensaje de estado). |

## Estructura principal

```text
src/
  index.html
  views/
    header.html
    footer.html
  assets/
    scripts/
      main.js
    styles/
      main.scss
      _variables.scss
      _functions.scss
      layouts/
        _home.scss
    images/
      pictures/
      markers/
```

## Funcionalidades destacadas

- Menu movil con boton hamburguesa y cierre automatico al cambiar de seccion.
- Navegacion por anclas con desplazamiento suave.
- Mapa Leaflet con marcador personalizado y enlace externo a Google Maps.
- Diseno responsive con componentes reutilizables en SCSS.

## Autor

Ruben Infante

## Licencias
- https://es.wikipedia.org/wiki/Archivo:Las_tuerces_01.jpg
  - Creative Commons Attribution-Share Alike 4.0 International. 
- https://es.wikipedia.org/wiki/Archivo:Las_Tuerces_02.jpg
  - Creative Commons Attribution-Share Alike 4.0 International. 
- https://commons.wikimedia.org/wiki/File:Las_tuerces_03.jpg
  - Creative Commons Attribution-Share Alike 4.0 International. 
- https://commons.wikimedia.org/wiki/File:Las_tuerces_04.jpg
  - Creative Commons Attribution-Share Alike 4.0 International. 
- https://es.wikipedia.org/wiki/Archivo:Las_Tuerces_02.jpg
  - Creative Commons Attribution-Share Alike 4.0 International. 