# Conectar ident.com.mx — guía para hacerlo en una sentada

Comprobado el 25-nov-2026 desde la terminal.

## Lo que ya está hecho (y no hay que tocar)

El dominio **ya apunta a la cuenta de Vercel de la clínica**. No hace
falta cambiar DNS, ni mover el dominio, ni el flujo de reclamo por TXT
que habíamos preparado:

```
ident.com.mx       NS   ns1.vercel-dns.com, ns2.vercel-dns.com
ident.com.mx       A    216.198.79.1, 64.29.17.1
www.ident.com.mx   A    64.29.17.1, 216.198.79.65
```

Y lo que contesta hoy:

```
HTTP/2 404
server: Vercel
x-vercel-error: DEPLOYMENT_NOT_FOUND
```

Ese `DEPLOYMENT_NOT_FOUND` es la buena noticia: significa que el dominio
está pegado a un proyecto de Vercel que todavía no tiene ningún deploy.
Es el proyecto `ident` del scope `i-dent` (plan Hobby, usuario
`omarjmmolina-5059`), que está vacío.

**Traducción: falta una sola cosa, que ese proyecto tenga un deploy.**
En cuanto lo tenga, el dominio funciona solo.

## El código ya está en su repo (25-nov-2026)

Se subió el historial completo —21 commits— a **`omarjmmolina/iDent`**,
que estaba vacío. Se empujó desde el remote `cliente`:

```
git remote add cliente https://github.com/omarjmmolina/iDent.git
git push cliente main
```

El repo sigue siendo **público** por decisión del cliente. No hay
credenciales dentro (no se rastrea ningún `.env`), pero sí están
visibles las notas internas de PENDIENTES.md. Si más adelante quieren
cerrarlo, lo hace Omar en **Settings → General → Change repository
visibility**; nuestro permiso es `push`, no `admin`.

### Cómo se trabaja a partir de aquí

El repo que despliega es el de la clínica, así que cada cambio tiene que
llegar a los dos. Para no depender de acordarse, `origin` quedó
configurado con **dos URLs de push**:

```
git remote set-url --add --push origin https://github.com/gerardossanchez01-creator/ident-queretaro.git
git remote set-url --add --push origin https://github.com/omarjmmolina/iDent.git
```

Con eso el flujo no cambia en nada:

```
git push origin main
```

va a los dos repos de un golpe, y el push al de la clínica es el que
dispara el deploy en Vercel. Si alguna vez hace falta subir a uno solo,
el remote `cliente` sigue apuntando nada más al de ellos.

## Conectar: usar el proyecto que YA existe

⚠️ No crear un proyecto nuevo. El dominio ya está pegado al proyecto
**`ident`** del scope **`i-dent`**. Si se importa el repo como proyecto
nuevo, el dominio se queda en el viejo y hay que moverlo a mano.

El camino correcto es entrar a ese proyecto y conectarle el repo:

**Proyecto `ident` → Settings → Git → Connect Git Repository →
`omarjmmolina/iDent`**

⚠️ **Cuidado con la sesión de GitHub del navegador.** Al conectar, Vercel
abre la autorización de GitHub usando la sesión que el navegador tenga
abierta. Si es la de la agencia, su Vercel termina viendo nuestros repos.
Conviene hacerlo en una ventana privada. La cuenta de Vercel de la
clínica (`omarjmmolina-5059`) parece creada desde GitHub, así que lo más
probable es que ya esté vinculada a `omarjmmolina` y el repo aparezca en
la lista sin pedir nada.

| Campo | Valor |
|---|---|
| Framework Preset | Next.js *(lo detecta solo)* |
| Root Directory | `./` |
| Build Command | el de por defecto |
| Production Branch | `main` |

**Variable de entorno, en Production. Es la que importa:**

```
NEXT_PUBLIC_SITE_URL = https://ident.com.mx
```

Sin ella el sitio se publica con `noindex` y un `robots.txt` que bloquea
todo. Es a propósito: evita que Google indexe la versión de pruebas en
`.vercel.app`. Con ella puesta, el sitio se abre a Google y todas las
URLs canónicas apuntan al dominio bueno.

Si se olvida, se agrega después en **Settings → Environment Variables** y
se vuelve a desplegar: la variable solo entra en builds nuevos.

### Dos tropiezos que ya nos pasaron

**1. Tipo «Config», no «Secret».** Vercel rechaza una variable marcada
como Secret si lleva el prefijo `NEXT_PUBLIC_`, y tiene razón: ese
prefijo significa que el valor se incrusta en el JavaScript que llega al
navegador, así que secreta no puede ser. Aquí no hay nada que proteger,
el valor es la dirección pública del sitio.

**2. El «Redeploy» con caché puede no servir.** Si el código no cambió,
Vercel reutiliza el build anterior y vuelve a publicar exactamente lo
mismo, variable nueva incluida pero sin aplicar. Dos formas de forzar un
build de verdad:

- En el diálogo de Redeploy, **desmarcar «Use existing Build Cache»**.
- O empujar un commit cualquiera, que es lo que hacemos desde aquí.

La prueba de que sirvió es que `robots.txt` deje de decir `Disallow: /`.

## Dominios

En **Settings → Domains** del proyecto deben quedar los dos:

- `ident.com.mx` — Primary
- `www.ident.com.mx` — Redirect a `ident.com.mx` (308)

Probablemente ya estén, porque el DNS ya resuelve. Solo hay que
confirmar que están en **este** proyecto y no en otro.

## ✅ Conectado y verificado (25-nov-2026)

```
www.ident.com.mx  →  301  →  https://ident.com.mx/   (un solo salto)
ident.com.mx      →  200
canonical            https://ident.com.mx
meta robots          index, follow
robots.txt           Allow: / + Host + Sitemap
sitemap              69 URLs, todas en ident.com.mx
GTM                  GTM-TWT59HQN cargando
Search Console       etiqueta presente en las 69 páginas
```

El sitio está en línea, indexable y midiendo. El apex es el dominio
principal y el `www` redirige hacia él, que es lo que dicen las
canónicas.

Queda `i-dent.vercel.app` apuntando también a producción. No estorba:
las canónicas le dicen a Google cuál es la versión buena.

### Lo que falta, y ya no es código

1. **Search Console**: darle a Verificar y enviar el sitemap. Lo más
   cómodo es dar de alta una propiedad de **dominio** (por DNS, desde el
   mismo Vercel): cubre el apex, el `www` y cualquier subdominio.
2. **Ficha de Google**: poner `https://ident.com.mx` como sitio web del
   perfil de negocio. Es el enlace que más pesa para el SEO local.
3. **Teléfono de la ficha**: sigue con el personal del doctor. Ver
   PENDIENTES.md, punto 1.
4. **GTM**: el contenedor carga, pero hay que configurarle las etiquetas
   dentro (GA4 y las conversiones de clic). Los CTA ya traen
   `data-evento`.

## Verificación, en este orden

```
curl -I https://ident.com.mx
```
Debe dar `200`, no `404`.

```
curl -s https://ident.com.mx/robots.txt
```
Debe **permitir** el rastreo y listar el sitemap. Si dice `Disallow: /`,
falta la variable de entorno.

```
curl -s https://ident.com.mx/sitemap.xml | grep -c "<loc>"
```
Deben ser **65** URLs, todas con `https://ident.com.mx`.

## Después, el mismo día

1. **Search Console**: alta de la propiedad por dominio y envío del
   sitemap. La verificación por DNS se hace en el mismo Vercel.
2. **Ficha de Google**: poner el sitio web en el perfil de negocio. Es el
   enlace que más pesa para el SEO local.
3. **Teléfono de la ficha**: sigue con el 775 144 8793, que es el
   personal. Debería ser el 442 143 7966. Ver PENDIENTES.md, punto 1.

## Un aviso que no es nuestro pero conviene decirles

Su cuenta de Vercel muestra **«Action Required: the billing address on
your payment method is missing or incomplete»**. El dominio está
registrado ahí, así que si el cobro de renovación falla, el dominio es lo
que se cae. Vale la pena que lo completen antes de que el sitio esté
recibiendo tráfico.
