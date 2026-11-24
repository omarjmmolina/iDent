# Pendientes antes de publicar

Actualizado el 21-nov-2026, después de verificar los datos contra la
[ficha de Google Business Profile](https://maps.app.goo.gl/49F15e9GqALj7oEYA).

---

## ✅ Resuelto con la ficha de Google

La ficha zanjó los dos conflictos de NAP que había. El sitio ya usa estos
datos:

| Dato | Valor confirmado |
|---|---|
| Nombre | Clínica Dental, iDent |
| Dirección | Av. Prolongación El Jacal **955**, Local 23, Plaza El Jacal, 76910 El Pueblito, Corregidora |
| Teléfono | **775 144 8793** |
| Horario | Lunes a viernes 9:00–21:00 · Sábado 10:00–18:00 · Domingo cerrado |
| Coordenadas | 20.5598265, -100.4313485 |
| Plus code | HH59+WF El Pueblito, Querétaro |
| Reseñas | 4.9 con 47 opiniones |

## 🚨 1. Facebook está desactualizado y hay que corregirlo

Facebook contradice a Google en los dos campos que más pesan para el
posicionamiento local:

| Campo | Google (correcto) | Facebook (hay que corregir) |
|---|---|---|
| Número | El Jacal **955** | El Jacal 953 |
| Teléfono | **775 144 8793** | 775 144 7793 |

Además, la portada de Facebook muestra un tercer número, **442 143 7966**,
y un anuncio antiguo un cuarto incompleto. Google premia que el NAP
coincida carácter por carácter en todos lados: mientras haya cuatro
versiones circulando, se está perdiendo señal.

**Acción:** corregir la información de contacto de Facebook y rehacer o
retirar la imagen de portada con el teléfono viejo.

## ✅ Mapa activo

El mapa de la clínica ya está incrustado en portada, contacto y las seis
páginas de zona, con el pin real en Plaza El Jacal. Usa el modo embed de
Google, que funciona sin API key. El `Place ID` sigue haciendo falta solo
para el enlace de reseñas (punto 2).

## 🚨 2. Enlace para pedir reseñas

Falta el enlace directo (`g.page/r/…`) que se saca del panel de Google
Business Profile, en "Pedir reseñas". Es la pieza que hace funcionar el
frente 04 del plan: sin él no hay sistema de reseñas, y la meta son 50
(hoy 47, así que está a tiro).

Dónde se carga: `googleReviewUrl` en `src/content/clinica.ts`.

## 🚨 3. Meses sin intereses

El sitio ya los anuncia como validador en la banda superior de todas las
páginas principales, por indicación del cliente. **Falta confirmar:**

- ¿A cuántos meses? (`MSI_MESES` en `src/content/precios.ts`)
- ¿Con qué bancos o terminales?
- ¿Desde qué monto aplica?

Mientras no se confirme, el texto habla de meses sin intereses sin
prometer un plazo concreto. Para mostrar el plazo, pon `MOSTRAR_PLAZO` en
`true` en `src/components/Validadores.tsx`.

## 🚨 4. Datos del equipo

`src/app/equipo/page.tsx` tiene la estructura y **ningún dato real**. Por
cada integrante hace falta: nombre completo, puesto y especialidad, cédula
profesional y de especialidad, universidad y año, y dos o tres líneas de
perfil.

Una cédula incorrecta en un sitio de salud no es una errata. Nada de esto
se publica sin confirmación.

## 🚨 5. Revisión legal del aviso de privacidad

`src/app/aviso-de-privacidad/page.tsx` tiene una base conforme a la
LFPDPPP. Falta razón social del responsable, domicilio fiscal y correo
para derechos ARCO, y que lo revise quien lleve el tema legal.

---

## 📋 6. Precios

`src/content/precios.ts` está en `null` en todos los tratamientos.
Mientras tanto el sitio muestra "Consultar" en vez de inventar cifras,
que es lo correcto, pero con 8 artículos de blog sobre precios publicados,
tener las cifras reales es lo que más rendimiento daría.

Hace falta, por tratamiento: precio desde, si aplica MSI, qué incluye y
qué se cotiza aparte.

**Pregunta aparte:** Facebook promociona una **"Evaluación de sonrisa
GRATIS"**. Si sigue vigente es el mejor gancho del sitio y va en portada.
Si ya no, hay que bajar ese post.

## ✅ Criterio de imágenes de las verticales (24-nov-2026)

Omar pidió que las tarjetas de servicio no lleven personas: se nota que
no son ellos y resta. Las ocho pasaron a objetos y modelos:

| Vertical | Imagen |
|---|---|
| Limpieza y prevención | Cepillo de dientes, macro |
| Resinas y coronas | Modelos dentales |
| Ortodoncia | Modelo con brackets |
| Estética dental | Macro de sonrisa *(ver nota)* |
| Endodoncia | Corte de diente con sus conductos |
| Cirugía y extracciones | Instrumental quirúrgico |
| Implantes dentales | Implante con corona *(le gustó, no se tocó)* |
| Dentista para niños | Cepillos de colores |

**La única con persona es estética dental**, y es una macro de labios y
dientes sin rostro. La dejamos porque en estética el resultado *es* la
sonrisa y no identifica a nadie. Si prefieren quitarla también, se
cambia por una guía de color.

**El criterio se aplicó a todo el sitio** (24-nov-2026): se cambiaron 20
imágenes más, seis de páginas de tratamiento y trece del blog. Ahora el
sitio no tiene ninguna foto con una persona identificable.

Lo que sí quedó, y es deliberado:

- **Manos con guante** en alineadores, endodoncia e implantes. Son
  clínicas y anónimas: no se leen como "una persona que no es de aquí".
- **Macros de sonrisa sin rostro** en estética dental y en tres
  artículos donde el tema *es* el resultado o el aspecto de los dientes.

Efecto secundario a vigilar: el modelo dental con brackets aparece ahora
en cinco sitios. Es coherente, pero si llegan fotos propias de
ortodoncia, esas son las primeras que conviene sustituir.

## 📋 7. Fotografías

El sitio no se ve con huecos: tratamientos, consultorio y los 40
artículos del blog llevan imágenes de stock de Unsplash marcadas como
"Imagen ilustrativa". Son provisionales y conviene sustituirlas, porque
las fotos reales convierten mejor.

Si la clínica va generando fotos propias de tratamientos, las del blog
son las primeras que conviene cambiar: son las que ve alguien que llega
desde una búsqueda y todavía no conoce la clínica.

**Donde NO hay stock y sigue el marcador, a propósito:** retratos del
equipo, casos de antes y después y fachada de la clínica. Poner un modelo
de banco de imágenes bajo el nombre de un doctor, o el resultado de otro
paciente como caso propio, es engañar a quien lo lee.

Lista de tomas pendientes, con su ruta, en el propio sitio: cada marcador
dice qué foto va y cómo se llama el archivo.

## 📋 8. Casos reales

Los seis casos de `src/app/casos/page.tsx` tienen títulos y descripciones
de ejemplo. Sustituirlos por casos reales con su tratamiento, su duración
y la autorización firmada del paciente.

## 📋 9. La ficha de Google tiene dos huecos evidentes

Al revisarla salieron dos cosas que son trabajo inmediato del plan:

- **No tiene sitio web enlazado.** En cuanto se publique, enlazarlo es lo
  primero.
- **Solo tiene 4 fotos.** El frente 04 pide cargarlas por servicio. Es de
  lo que más mueve en el mapa local.

También conviene cargar los servicios uno por uno con su descripción y
declarar la zona de cobertura por municipio.

## 🚨 10. Dominio: está comprado, pero en otra cuenta de Vercel

El dominio es **ident.com.mx**. Estado comprobado el 23-nov-2026:

| | |
|---|---|
| Registrado | 18-nov-2026 (expira 18-nov-2027) |
| Registrador | Name.com, que es el que usa Vercel al comprar desde Vercel |
| Nameservers | `ns1.vercel-dns.com` y `ns2.vercel-dns.com` |
| Responde | `404 DEPLOYMENT_NOT_FOUND`, servido por Vercel |

O sea: está comprado, apunta a Vercel y Vercel lo sirve, pero **no tiene
ningún proyecto asignado**.

**El problema:** no está en la cuenta de Gerardo. Al intentar asignarlo,
Vercel responde `403 domain_not_owned`. El equipo **Crauli** es el único
al que tiene acceso y tiene cinco dominios, ninguno es este. Lo compró
alguien más desde su propia cuenta de Vercel.

### Decisión: se traspasa la cuenta (24-nov-2026)

En vez de reclamar el dominio, **se traspasa la cuenta de Vercel donde
está**. Así el dominio viaja con ella y no hay que mover propiedad a
mano ni verificar nada.

El reclamo por TXT queda descartado y **no se completó**: no se añadió
ningún registro y el dominio sigue intacto en su cuenta. Crauli sigue
con sus cinco dominios de siempre.

Una vez traspasada la cuenta, queda:

1. Asignar `ident.com.mx` y `www.ident.com.mx` al proyecto
   `ident-queretaro`.
2. Crear la variable `NEXT_PUBLIC_SITE_URL` con `https://ident.com.mx`.
3. Redesplegar: se activan las canónicas al dominio real y la
   indexación.
4. Search Console y enlazarlo desde la ficha de Google.

Mientras tanto el sitio sigue en vivo en
https://ident-queretaro.vercel.app, en noindex a propósito.

<details>
<summary>Por si hiciera falta la vía alternativa (reclamo por TXT)</summary>

Vercel tiene el flujo "Claim Domain Ownership", que verifica el control
del DNS con un registro TXT y no requiere ser miembro de ninguna cuenta.
El registro que generó para este dominio:

| Campo | Valor |
|---|---|
| Tipo | `TXT` |
| Nombre | `_vercel` |
| Valor | `vc-domain-verify=ident.com.mx,fa85da4c3642704a6ef7` |

Lo añade quien tenga acceso a esa cuenta, y después se pulsa
"Verify & Claim" desde Crauli. ⚠️ Reclamar **mueve la propiedad**: el
dominio sale de la cuenta donde está hoy.

Lo que no sirve es "transferir entre equipos": exige ser miembro de las
dos cuentas y el plan Hobby no admite miembros.

</details>

### Una vez transferido (minutos)

1. Asignar `ident.com.mx` y `www.ident.com.mx` al proyecto
   `ident-queretaro`.
2. Crear la variable `NEXT_PUBLIC_SITE_URL` con `https://ident.com.mx`.
3. Redesplegar: se activan las canónicas al dominio real y la
   indexación.
4. Search Console y enlazarlo desde la ficha de Google.

No hace falta tocar DNS ni código.

### Y a futuro: traspasar el proyecto entero a la clínica

El plan promete que "nada queda a nombre nuestro", así que el destino
final es que el proyecto viva en la cuenta de la clínica, no en Crauli.
Vercel lo permite sin cortes y el traspaso **se lleva el dominio con
él**, además de despliegues, variables de entorno y el vínculo con
GitHub.

**El requisito que condiciona el calendario**, según la documentación de
Vercel: *"You must be an owner of the team you're transferring from, and
a member of the team you're transferring to."* Es decir, hay que ser
miembro de la cuenta destino.

Y el plan **Hobby no tiene colaboración de equipo**: no admite invitar
miembros. Si la cuenta de la clínica es Hobby, el traspaso no se puede
iniciar. Para hacerlo tendrían que pasar a **Pro** (20 USD al mes) e
invitar a Crauli como miembro.

**Recomendación:** conectar el dominio ahora para poder publicar, y
traspasar el proyecto completo al entregar, que es cuando toca según el
plan. Traspasarlo hoy a una cuenta sin colaboración dejaría el
despliegue fuera de nuestro alcance con el trabajo a medias.

## 📋 10b. Correo
- **Correo de contacto.** En Facebook aparece `omarmmolina@outlook.com`,
  que es personal. Conviene uno del dominio.
- **WhatsApp.** Confirmar que es el mismo 775 144 8793.

## 📋 11. Llegada a la clínica

Con las zonas lejanas fuera (ver más abajo), ya no hay tiempos de
traslado que contrastar: las dos páginas que quedan son del propio
municipio.

Sigue pendiente el **estacionamiento** de Plaza El Jacal: si es propio,
si es libre y si hay espacio para camioneta. Es el dato que más preguntan
los pacientes que llegan en coche.

---

## ✅ Periodoncia: fuera del sitio (24-nov-2026)

Se quitó la vertical de periodoncia a petición de la clínica: no tienen
periodoncista y rara vez derivan a uno, así que anunciarla llevaría
pacientes a pedir algo que no se puede resolver ese día.

Qué quedó:

- Página, menú, tarjeta de portada, pie, schema y sitemap: fuera.
- La página de prevención ahora **deriva**: dice que una enfermedad
  periodontal avanzada necesita periodoncia y que, si hace falta, se
  orienta sobre a quién acudir.
- Los artículos del blog sobre encías **se quedan**: son información
  útil, no prometen el tratamiento, y traen tráfico de búsquedas que
  acaba en valoración.

Para recuperarla, el bloque está en el historial de git y todo el sitio
se reconstruye solo desde `src/content/verticales.ts`.

## ❓ 12. Falta el punto 1 de la lista de servicios

La lista que mandó la clínica **empieza en el punto 2**. Falta confirmar
cuál era el 1: puede ser odontología general.

Implantología ya quedó como novena vertical, con su página en
`/implantes-dentales-queretaro`.

## ✅ 13. Zonas lejanas: fuera del sitio (24-nov-2026)

Decisión de la clínica: **solo se publican zonas a 25 minutos o menos**.
Quedan dos páginas, las dos de la sede:

- `/dentista-en-corregidora`
- `/dentista-en-el-pueblito`

Se retiraron Juriquilla (~40 min), Zibatá (35–45), El Marqués y
Huimilpan (25–40) y San Juan del Río (55–65), con sus páginas, su
entrada en el menú, su enlace en el pie y su línea del sitemap.

También se reescribió todo lo que prometía atenderlas: la pregunta
frecuente de la portada, la de ortodoncia y dos párrafos del blog ahora
hablan de «menos de veinticinco minutos» en vez de nombrar municipios.
Las menciones que quedan en el blog son contexto de mercado (lo que
cuesta la ortodoncia en Juriquilla, cuánto se hace de allá a
Corregidora): informan, no prometen cita.

`areaServed` del schema ya no se deriva de `ZONAS`; está escrito a mano
en `src/lib/schema.ts` como Corregidora y Santiago de Querétaro.

Para recuperar una zona basta volver a añadirla a
`src/content/zonas.ts`: la página, el menú y el sitemap se reconstruyen
solos, y el bloque original está en el historial de git.

## ❓ 14. Decisiones de alcance

- **Implantología y odontología general.** Facebook comunica cuatro
  especialidades. El sitio cubre las dos del plan. ¿Se abre página de
  implantología?
- **Santiago de Querétaro.** El plan la pone como prioridad 2 con
  entregable "pilares de servicio", no página de zona. Queda así.
- **Volumen de palabras clave.** Con datos de volumen se pueden reordenar
  las prioridades de zona y de categoría del blog, y afinar los títulos de
  los 40 artículos.

---

## 🔧 13. Cierre técnico (frentes 05 y 06 del plan)

- [ ] Dominio apuntado a Vercel y HTTPS activo
- [ ] `SITE_URL` actualizado al dominio real
- [ ] Google Analytics 4 conectado a los eventos `click_whatsapp` y
      `click_telefono`, que ya están en todos los botones
- [ ] Search Console verificado y sitemap enviado
- [ ] Sitio web enlazado desde la ficha de Google
- [ ] Mapa de Google incrustado en `/contacto` y en las 6 páginas de zona
- [ ] Revisión de indexación página por página
- [ ] Accesos entregados a nombre de la clínica
