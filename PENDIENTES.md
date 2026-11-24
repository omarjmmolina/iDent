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

### Qué hace falta

Que quien tenga esa cuenta **transfiera el dominio al equipo Crauli**:
Vercel → Domains → ident.com.mx → ⋯ → Transfer → Crauli. Es gratis,
instantáneo y sin corte de servicio, porque los nameservers ya son de
Vercel. La alternativa es que inviten a Crauli como miembro de esa
cuenta.

### Una vez transferido (minutos)

1. Asignar `ident.com.mx` y `www.ident.com.mx` al proyecto
   `ident-queretaro`.
2. Crear la variable `NEXT_PUBLIC_SITE_URL` con `https://ident.com.mx`.
3. Redesplegar: se activan las canónicas al dominio real y la
   indexación.
4. Search Console y enlazarlo desde la ficha de Google.

No hace falta tocar DNS ni código.

## 📋 10b. Correo
- **Correo de contacto.** En Facebook aparece `omarmmolina@outlook.com`,
  que es personal. Conviene uno del dominio.
- **WhatsApp.** Confirmar que es el mismo 775 144 8793.

## 📋 11. Tiempos de traslado

Las páginas de zona dicen tiempos aproximados en tráfico normal
(Juriquilla ~40 min, Zibatá 35–45, El Marqués y Huimilpan 25–40, San Juan
del Río 55–65). Conviene contrastarlos con lo que reportan los pacientes.

Pendiente también el **estacionamiento** de Plaza El Jacal: si es propio,
si es libre y si hay espacio para camioneta.

---

## ❓ 12. Falta el punto 1 de la lista de servicios

La lista que mandó la clínica **empieza en el punto 2**. Falta confirmar
cuál era el 1: puede ser odontología general.

Implantología ya quedó como novena vertical, con su página en
`/implantes-dentales-queretaro`.

## ❓ 13. Las zonas lejanas

En la conversación quedó abierto quitar las zonas más lejanas. Están las
seis: Corregidora y El Pueblito como sede, y Juriquilla, Zibatá, El
Marqués y Huimilpan, y San Juan del Río como traslado.

Mi lectura: las cuatro de traslado ya no prometen sucursal, así que el
riesgo de doorway page está resuelto. La que menos se sostiene es San
Juan del Río, a una hora: funciona para endodoncia y alineadores, poco
para el resto. Si hay que recortar, esa primero.

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
