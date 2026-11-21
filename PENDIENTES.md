# Pendientes antes de publicar

Lista de lo que falta confirmar o recibir. Está ordenada por lo que más
bloquea. Todo lo marcado 🚨 **impide publicar**: son datos que, si salen
mal, dañan el posicionamiento local o son un problema serio en un sitio de
salud.

---

## 🚨 1. Conflicto de NAP: hay tres teléfonos distintos

El plan insiste en que el nombre, dirección y teléfono tienen que ser
idénticos en el sitio, en la ficha de Google y en cualquier directorio.
Hoy no lo son:

| Teléfono | Dónde aparece |
|---|---|
| **775 144 7793** | Facebook oficial, sección "Información de contacto" |
| 775 144 8793 | buscodentista.com.mx y cybo.com |
| 442 143 7966 | imagen de portada de Facebook |
| 44 21 85 67 81 | anuncio antiguo de "Evaluación de sonrisa" |

**Qué hace falta:** decidir cuál es el número bueno. El sitio usa hoy el de
Facebook (775 144 7793) por ser fuente propia. Una vez elegido, hay que
corregirlo en la portada de Facebook y pedir la corrección en los
directorios.

También hay que confirmar **a qué número llega el botón de WhatsApp** de
Facebook, porque es el que va a usar todo el sitio.

Dónde se cambia: `src/content/clinica.ts`.

## 🚨 2. Conflicto en el número de la calle

- Facebook: Avenida Prolongación El Jacal **953**, Local 23
- Directorios: Av. Prol. El Jacal **955**, Local 23

El sitio usa 953. Hay que confirmar cuál es y corregir el otro.

## 🚨 3. Datos del equipo

`src/app/equipo/page.tsx` tiene la estructura pero **ningún dato real**.
Hace falta, por cada integrante:

- Nombre completo
- Puesto y especialidad
- Cédula profesional y cédula de especialidad
- Universidad y año
- Dos o tres líneas de perfil

Una cédula incorrecta en un sitio de salud no es una errata. Nada de esto
se publica sin confirmación.

## 🚨 4. Revisión legal del aviso de privacidad

`src/app/aviso-de-privacidad/page.tsx` tiene una base conforme a la
LFPDPPP, pero falta: razón social del responsable, domicilio fiscal y
correo para derechos ARCO. Debe revisarlo quien lleve el tema legal.

---

## 📋 5. Precios

`src/content/precios.ts` está en `null` en todos los tratamientos. Mientras
tanto el sitio muestra "Consultar" en vez de inventar cifras, que es lo
correcto, pero el plan apunta a que el precio visible es diferenciador:
Dr. Alonso Lozano publica valoración desde $800 y eso le funciona.

Hace falta, por tratamiento:

- Precio desde (MXN)
- Si aplica meses sin intereses y a cuántos meses
- Qué incluye y qué se cotiza aparte

**Pregunta aparte:** Facebook promociona una **"Evaluación de sonrisa
GRATIS"**. Si sigue vigente, es el mejor gancho del sitio y conviene
ponerlo en la portada. Si ya no, hay que bajar ese post.

## 📋 6. Fotografías

Cada hueco del sitio dice en pantalla qué foto va y con qué ruta. Resumen:

**Clínica**
- `fachada-clinica-ident-corregidora` — fachada o recepción, horizontal
- `consultorio-ident` — interior del consultorio, horizontal
- `equipo-ident` — equipo completo

**Equipo** (retrato vertical, misma luz y mismo encuadre los tres)
- `doctor-titular`, `ortodoncista`, `endodoncista`

**Tratamientos** (una por página de servicio)
- `brackets-metalicos`, `brackets-esteticos`, `alineadores-invisibles`,
  `ortodoncia-infantil`, `ortopedia-maxilar`
- `tratamiento-de-conductos`, `retratamiento`, `urgencia-dolor-dental`
- `ortodoncia-queretaro`, `endodoncia-queretaro` (las dos de pilar)

**Casos antes y después** — 6 casos, dos fotos cada uno
(`caso-01-antes` / `caso-01-despues` … hasta `caso-06`). Mismo encuadre y
misma luz en las dos tomas, y **autorización firmada del paciente**.

Formato: WebP, ancho máximo 1600 px, bajo 300 KB.

## 📋 7. Casos reales

Los seis casos de `src/app/casos/page.tsx` tienen títulos y descripciones
de ejemplo. Hay que sustituirlos por casos reales de la clínica con su
tratamiento y su duración.

## 📋 8. Ficha de Google Business Profile

Hace falta el acceso para:

- Sacar las **coordenadas exactas** del pin (hoy hay unas aproximadas al
  centro de El Pueblito).
- Sacar la **URL corta del perfil** y el **enlace directo para reseñas**,
  que activan los mapas y los botones del sitio.
- Confirmar la calificación y el número de reseñas (los directorios dicen
  4.9 con 27; la meta del plan son 50).

Dónde se cargan: `googleMapsUrl`, `googleReviewUrl` y `geo` en
`src/content/clinica.ts`.

## 📋 9. Horarios

Los dos directorios no coinciden:

- buscodentista: L–V 9:00–21:00 · Sáb 10:00–18:00
- cybo: Vie 10:00–21:00 · Sáb 10:00–16:00

El sitio usa la primera versión. Confirmar cuál es la buena.

## 📋 10. Dominio y correo

- **Dominio definitivo.** `SITE_URL` en `src/content/clinica.ts` está hoy
  en `https://identqueretaro.com` como marcador.
- **Correo de contacto.** En Facebook aparece `omarmmolina@outlook.com`,
  que es personal. Conviene uno del dominio (`contacto@…`).

## 📋 11. Tiempos de traslado

Las páginas de zona dicen tiempos aproximados en tráfico normal
(Juriquilla ~40 min, Zibatá 35–45, El Marqués y Huimilpan 25–40, San Juan
del Río 55–65). Conviene contrastarlos con lo que reportan los pacientes.

También está pendiente confirmar el **estacionamiento** de Plaza El Jacal:
si es propio, si es libre y si hay espacio para camioneta.

---

## ❓ 12. Decisiones de alcance

- **Implantología y odontología general.** Facebook comunica cuatro
  especialidades: odontología general, endodoncia, ortodoncia e
  implantología. El sitio cubre solo las dos del plan. ¿Se abre página de
  implantología más adelante?
- **Santiago de Querétaro.** El plan la pone como prioridad 2 pero con
  entregable "pilares de servicio", no página de zona. Queda así.
- **Volumen de palabras clave.** Si hay datos de volumen por keyword, se
  pueden reordenar las prioridades de zona y afinar los títulos.

---

## 🔧 13. Cierre técnico (frentes 05 y 06 del plan)

- [ ] Dominio apuntado a Vercel y HTTPS activo
- [ ] `SITE_URL` actualizado al dominio real
- [ ] Google Analytics 4 instalado y conectado a los eventos
      `click_whatsapp` y `click_telefono`, que ya están en los botones
- [ ] Search Console verificado y sitemap enviado
- [ ] Mapa de Google incrustado en `/contacto` y en las 6 páginas de zona
- [ ] Revisión de indexación página por página
- [ ] Accesos entregados a nombre de la clínica
