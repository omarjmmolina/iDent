# iDent · Sitio web y SEO local en Querétaro

Sitio de **iDent Clínica Dental** (El Pueblito, Corregidora, Querétaro),
construido según el [plan de trabajo de noviembre 2026](docs/iDent_Plan_de_Trabajo_Noviembre_2026.pdf):
**63 páginas indexables**, cada una apuntando a una búsqueda distinta, con
foco en ortodoncia, endodoncia, cobertura por municipio y 40 artículos de
blog para búsquedas de cola larga.

> El plan parte de un hallazgo concreto: los dos competidores de referencia
> tienen entre **1 y 2 URLs indexables** y **ningún sitemap**. Nadie cubre
> Corregidora, El Marqués, Huimilpan ni San Juan del Río con páginas propias.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Render | 100% estático (SSG) |
| Despliegue | Vercel |

## Arranque

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # genera las 25 páginas estáticas
```

## Las 63 páginas

```
/                                             Home
/ortodoncia-queretaro                         Pilar
  /brackets-metalicos
  /brackets-esteticos
  /alineadores-invisibles
  /ortodoncia-infantil
  /ortopedia-maxilar
/endodoncia-queretaro                         Pilar
  /tratamiento-de-conductos
  /retratamiento
  /urgencia-dolor-dental
/zonas/dentista-en-corregidora                Prioridad 1
/zonas/dentista-en-el-pueblito                Prioridad 1
/zonas/dentista-en-juriquilla                 Prioridad 3
/zonas/dentista-en-zibata                     Prioridad 3
/zonas/dentista-en-el-marques-y-huimilpan     Prioridad 4
/zonas/dentista-en-san-juan-del-rio           Prioridad 5
/precios   /casos   /equipo   /contacto
/blog                                         Índice con 7 categorías
/blog/<40 artículos>                          Cola larga
/aviso-de-privacidad
```

### Las 7 categorías del blog

| Categoría | Artículos | Para qué |
|---|---|---|
| Precios | 8 | Búsquedas de "cuánto cuesta…", la intención más comercial |
| Comparativas | 8 | "X o Y": el paciente ya decidió tratarse y está eligiendo |
| Dolor y miedo | 5 | Tráfico de urgencia y de quien lleva años posponiendo |
| Tiempos | 4 | "Cuánto dura / cuánto tarda" |
| Cuidados | 6 | Pacientes ya en tratamiento: retención y recomendación |
| Niños | 4 | Decisión de los papás, con ventana de edad |
| Señales de alerta | 5 | Síntomas que llevan a buscar de madrugada |

Además, generadas automáticamente: `/sitemap.xml` y `/robots.txt`.

## Dónde se edita el contenido

Todo el texto vive en `src/content/`. **No hay que tocar las páginas para
cambiar contenido.**

| Archivo | Qué contiene |
|---|---|
| `src/content/clinica.ts` | NAP: dirección, teléfono, horarios, redes, reseñas |
| `src/content/servicios.ts` | Los 2 pilares y los 8 sub-servicios: textos, FAQs, briefs de foto |
| `src/content/zonas.ts` | Las 6 páginas de zona: ruta, traslado, contexto propio |
| `src/content/precios.ts` | Importes por tratamiento y meses sin intereses |
| `src/content/blog/` | Los 40 artículos, un archivo por categoría |
| `src/content/resenas.ts` | Reseñas y las fuentes que las respaldan |
| `src/content/imagenes.ts` | Catálogo de imágenes de stock provisionales |

**Regla del plan:** nada duplicado entre servicios ni entre municipios.
Google penaliza las páginas clonadas que solo cambian el nombre de la zona.
Si se agrega una página, se escribe texto nuevo.

## Reseñas y sus fuentes

El bloque de reseñas aparece en todas las páginas (versión completa en las
principales, compacta en el blog). **Cada cifra lleva enlace a dónde se
consultó y con qué fecha.** Si un dato no se puede citar, no se publica.

Hoy las cifras vienen de directorios, no de la ficha de Google. Está
marcado como tal en el propio bloque. Se edita en
`src/content/resenas.ts`.

El `aggregateRating` del schema está desactivado a propósito: Google no
acepta que un negocio marque su propia calificación en su sitio.

## Imágenes

Hay dos tipos y no se mezclan:

- **Stock de Unsplash** (`public/img/stock/`, 12 imágenes) para ilustrar
  tratamientos y consultorio. Llevan el pie "Imagen ilustrativa" y se
  sustituyen en `src/content/imagenes.ts`. Licencia Unsplash: uso
  comercial libre, sin atribución obligatoria.
- **Fotos reales pendientes**, con su marcador en pantalla, en equipo,
  casos de antes y después y fachada. Ahí **no se usa stock**: poner un
  modelo bajo el nombre de un doctor, o el resultado de otra persona como
  caso propio, es engañar al paciente.

## Cómo poner las fotos

Cada hueco de imagen muestra en pantalla el brief de la toma y la ruta
exacta del archivo. Para activar una foto:

1. Deja el archivo en `public/img/` con el nombre que indica el marcador
   (p. ej. `public/img/brackets-metalicos.webp`).
2. En el contenido correspondiente, cambia `src: null` por la ruta:

```ts
foto: {
  src: "/img/brackets-metalicos.webp",   // antes: null
  alt: "Paciente con brackets metálicos en la clínica iDent de Corregidora",
  …
}
```

El marcador desaparece solo. Formato recomendado: **WebP**, ancho máximo
1600 px, bajo 300 KB.

Las fotos de equipo y casos están en `src/app/equipo/page.tsx` y
`src/app/casos/page.tsx`.

## SEO que ya está puesto

- **Datos estructurados**: `Dentist` con zona de cobertura por municipio,
  `FAQPage` en cada página con preguntas, `BreadcrumbList`, `MedicalProcedure`
  y `Article` en el blog (`src/lib/schema.ts`).
- **Canónicas** en las 25 páginas (`src/lib/seo.ts`).
- **Sitemap y robots** generados en build.
- **Enlazado interno**: cada sub-servicio enlaza a su pilar y a sus
  hermanos; cada zona enlaza a los dos servicios principales.
- **Eventos de medición**: los CTA llevan `data-evento="click_whatsapp"` y
  `data-evento="click_telefono"`, listos para conectar con GA4.

## Antes de publicar

Ver **[PENDIENTES.md](PENDIENTES.md)**. Hay datos que están tomados de
directorios públicos y **no verificados**, incluido un conflicto de teléfono
y de número de calle que hay que resolver.

## Despliegue en Vercel

1. Importar el repositorio en Vercel (detecta Next.js solo).
2. Cambiar `SITE_URL` en `src/content/clinica.ts` al dominio definitivo.
3. Apuntar el DNS del dominio a Vercel.
4. Dar de alta el sitio en Google Search Console y enviar el sitemap.
