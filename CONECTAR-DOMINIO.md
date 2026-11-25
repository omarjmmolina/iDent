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

## El único obstáculo: que su Vercel vea el repo

El repo es `gerardossanchez01-creator/ident-queretaro` y es **privado**.
Su Vercel no puede importar lo que no ve. Tres formas de resolverlo, de
más a menos recomendable:

### A. Omar como colaborador del repo (recomendada)

Conserva el código a nuestro nombre y se puede revocar en cualquier
momento.

1. Pedirle a Omar su **usuario exacto de GitHub**. Si no tiene, que cree
   uno; es gratis y tarda dos minutos.
2. Invitarlo (`gh repo add-collaborator` no existe; va por la API):
   ```
   gh api --method PUT repos/gerardossanchez01-creator/ident-queretaro/collaborators/OMAR -f permission=push
   ```
   Con `permission=push` puede leer el repo y que Vercel lo despliegue,
   pero no puede borrarlo ni cambiar su configuración.
3. Que acepte la invitación desde su correo (caduca a los 7 días).
4. En su Vercel: **Add New → Project → Import Git Repository**, conectar
   su GitHub y elegir `ident-queretaro`.

### B. Conectar nuestro GitHub a su Vercel

Si Omar no quiere saber nada de GitHub, se hace desde su pantalla con
nuestra cuenta. Al instalar la app de Vercel en GitHub hay que elegir
**«Only select repositories»** y marcar **solo `ident-queretaro`**. Si se
deja en «All repositories», su Vercel ve los 16 repos de la agencia.

### C. Transferir el repo a su GitHub

Es el traspaso definitivo. Solo cuando el proyecto esté cerrado y
cobrado, porque después ya no es nuestro.

## Configuración al importar

| Campo | Valor |
|---|---|
| Framework Preset | Next.js *(lo detecta solo)* |
| Root Directory | `./` |
| Build Command | el de por defecto |

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

## Dominios

En **Settings → Domains** del proyecto deben quedar los dos:

- `ident.com.mx` — Primary
- `www.ident.com.mx` — Redirect a `ident.com.mx` (308)

Probablemente ya estén, porque el DNS ya resuelve. Solo hay que
confirmar que están en **este** proyecto y no en otro.

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
