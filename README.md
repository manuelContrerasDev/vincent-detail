# Vincent.Detail - Landing Page

Landing page profesional para **Vincent.Detail**, servicio de detailing automotriz premium en El Monte y alrededores.

El sitio está desarrollado con **Next.js**, **React**, **TypeScript** y **Tailwind CSS**, desplegado en **Vercel** con dominio personalizado.

## Producción

Sitio oficial:

```txt
https://vincentdetail.cl
```

## Repositorio

```txt
https://github.com/manuelContrerasDev/vincent-detail.git
```

## Stack principal

```txt
Next.js 16.2.1
React 19
TypeScript
Tailwind CSS v4
Vercel
Google Analytics 4
Google Search Console
```

## Estado actual

```txt
Sitio en producción: Activo
Deploy: Vercel
Dominio: vincentdetail.cl
Branch principal: main
Último commit estable: 11e310f - Integra Google Analytics 4 y tracking de eventos
```

## Características principales

- Landing page profesional mobile-first.
- Diseño responsive para mobile, tablet y desktop.
- Secciones comerciales para packs, servicios, resultados, cobertura y contacto.
- Integración con WhatsApp para cotización directa.
- SEO técnico configurado.
- Metadata para buscadores y redes sociales.
- Open Graph y Twitter Card.
- Sitemap dinámico.
- Robots configurado.
- JSON-LD para negocio local.
- Google Analytics 4 integrado.
- Eventos personalizados para medir interacción comercial.
- Google Search Console verificado.
- URL principal indexada en Google.
- Arquitectura preparada para futuras integraciones, como sistema de reservas, API de calendario y panel administrativo.

## Preparación para escalabilidad

El proyecto fue construido con una estructura modular y escalable, permitiendo incorporar nuevas funcionalidades sin rehacer la base actual.

La landing actual funciona como una primera etapa comercial enfocada en:

```txt
Presencia digital
Posicionamiento local
Captación por WhatsApp
Medición de eventos comerciales
SEO técnico inicial
Indexación en Google
```

Para una segunda etapa de desarrollo, el proyecto puede evolucionar hacia funcionalidades más avanzadas, como:

```txt
Sistema de reservas online
Integración con Google Calendar
Formulario avanzado de cotización
Panel administrativo para gestionar servicios
Panel para revisar solicitudes de clientes
Automatización de disponibilidad horaria
Integración con APIs externas
Base de datos para clientes, reservas y servicios
Notificaciones por correo o WhatsApp
Métricas comerciales avanzadas
```

Estas funcionalidades no forman parte de la etapa actual, pero la arquitectura del proyecto permite integrarlas cuando el cliente decida avanzar a una segunda fase comercial o administrativa.

## Estructura relevante

```txt
app/
  layout.tsx
  page.tsx
  globals.css
  robots.ts
  sitemap.ts

components/
  analytics/
    GoogleAnalytics.tsx

  layout/
    Header.tsx
    MobileMenu.tsx
    Footer.tsx

  sections/
    FirstFoldSection.tsx
    HeroSection.tsx
    BenefitsSection.tsx
    PacksSection.tsx
    ServicesCatalogSection.tsx
    ResultsSection.tsx
    QuoteBannerSection.tsx
    CoverageSection.tsx
    ContactSection.tsx

  seo/
    LocalBusinessJsonLd.tsx

  ui/
    CTAButton.tsx
    FloatingWhatsApp.tsx
    PackVisualCard.tsx

content/
  site.ts
  packs.ts
  navigation.ts

lib/
  tracking.ts
  whatsapp.ts
  utils.ts

types/
  global.d.ts
```

## Instalación local

Clonar el repositorio:

```bash
git clone https://github.com/manuelContrerasDev/vincent-detail.git
```

Entrar al proyecto:

```bash
cd vincent-detail
```

Instalar dependencias:

```bash
npm install
```

Crear archivo de variables de entorno:

```bash
.env.local
```

Agregar la variable pública de Google Analytics:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Levantar el entorno local:

```bash
npm run dev
```

Abrir en el navegador:

```txt
http://localhost:3000
```

## Scripts disponibles

```bash
npm run dev
```

Levanta el proyecto en entorno local.

```bash
npm run build
```

Genera el build de producción.

```bash
npm run start
```

Ejecuta el build de producción localmente.

```bash
npm run lint
```

Ejecuta revisión de linting.

## Google Analytics 4

La integración de GA4 se encuentra en:

```txt
components/analytics/GoogleAnalytics.tsx
```

Se carga globalmente desde:

```txt
app/layout.tsx
```

La variable de entorno utilizada es:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID
```

El sistema de eventos personalizados se centraliza en:

```txt
lib/tracking.ts
```

## Eventos configurados

Eventos comerciales principales:

```txt
hero_cta_click
pack_click
service_click
contact_click
whatsapp_click
```

Eventos de comportamiento:

```txt
navigation_click
mobile_menu_click
social_click
```

Eventos marcados como eventos clave en GA4:

```txt
hero_cta_click
pack_click
service_click
contact_click
whatsapp_click
```

## Detalle de eventos

```txt
hero_cta_click
Clic en el CTA principal del hero.

pack_click
Clic en un botón de cotización de pack.

service_click
Clic en un botón de consulta de servicio.

contact_click
Clic en CTA de contacto o cotización desde secciones comerciales.

whatsapp_click
Clic directo hacia WhatsApp, como botón flotante o footer.

social_click
Clic hacia redes sociales.

navigation_click
Clic en navegación desktop o footer.

mobile_menu_click
Apertura, cierre o clic interno del menú mobile.
```

## SEO técnico

El proyecto incluye:

```txt
Metadata en app/layout.tsx
Open Graph
Twitter Card
Canonical URL
Sitemap
Robots
JSON-LD LocalBusiness
JSON-LD Organization
```

Sitemap:

```txt
https://vincentdetail.cl/sitemap.xml
```

Robots:

```txt
https://vincentdetail.cl/robots.txt
```

Datos estructurados:

```txt
components/seo/LocalBusinessJsonLd.tsx
```

## Google Search Console

Propiedad configurada:

```txt
vincentdetail.cl
```

Tipo de propiedad:

```txt
Dominio
```

Estado actual:

```txt
Sitemap enviado correctamente
URL principal indexada
HTTPS correcto
Datos estructurados válidos detectados
```

## Vercel

Proyecto oficial en Vercel:

```txt
vincent-detail
```

Dominio principal:

```txt
vincentdetail.cl
```

Redirección:

```txt
www.vincentdetail.cl -> vincentdetail.cl
```

El DNS está administrado desde Vercel mediante nameservers de Vercel.

Variable de entorno configurada en Vercel:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID
```

Ambientes configurados:

```txt
Production
Preview
```

## Deploy

El deploy productivo se ejecuta desde la rama:

```txt
main
```

Flujo recomendado:

```bash
npm run build
git status
git add .
git commit -m "Mensaje del cambio"
git push origin main
```

Vercel toma automáticamente el push hacia `main` y genera un nuevo deployment.

## Checklist antes de publicar cambios

Antes de enviar cambios a producción:

```txt
1. Ejecutar npm run build.
2. Revisar que no existan errores de TypeScript.
3. Probar navegación principal.
4. Probar botones de WhatsApp.
5. Probar versión mobile.
6. Confirmar que el deploy en Vercel quede Ready.
7. Validar producción en https://vincentdetail.cl.
```

## Pendientes SEO

### Google Business Profile

Pendiente crear o reclamar el perfil de empresa en Google Business Profile.

Recomendación de propiedad:

```txt
Cliente: Propietario principal
Developer: Administrador
```

Datos a confirmar con el cliente:

```txt
Correo Gmail propietario
Dirección real
Si atiende en local o solo a domicilio
Horarios de atención
Zonas reales de cobertura
Servicios definitivos
Fotos reales de trabajos
Logo y foto de portada
```

Servicios sugeridos:

```txt
Lavado básico
Lavado premium
Limpieza interior
Limpieza de tapiz
Pulido automotriz
Corrección de pintura
Tratamiento cerámico
Tratamiento cerámico con grafeno
Protección de pintura
Detailing automotriz a domicilio
```

### Reseñas

Solicitar reseñas reales a clientes después de cada servicio.

No comprar reseñas ni generar reseñas falsas.

### Fotos

Solicitar material visual real:

```txt
Logo
Foto de portada
Fotos antes/después
Fotos de interiores
Fotos de exteriores
Fotos de tratamientos cerámicos
Fotos de herramientas o productos
Fotos del equipo trabajando
```

### Páginas SEO futuras

Posibles páginas internas futuras:

```txt
/detailing-automotriz-el-monte
/lavado-premium-el-monte
/tratamiento-ceramico-el-monte
/limpieza-de-tapiz-auto-el-monte
/detailing-automotriz-talagante
/detailing-automotriz-buin
```

Cada página debe tener contenido real, fotos propias, texto único y CTA a WhatsApp.

## Etapa 2 - Funcionalidades futuras

El proyecto está preparado para evolucionar hacia una segunda etapa de desarrollo, orientada a automatización comercial y gestión interna.

Posibles mejoras futuras:

```txt
Sistema de reservas conectado a Google Calendar
Formulario de cotización con selección de servicio
Agenda con disponibilidad por fecha y hora
Panel administrativo para gestionar reservas
Registro de clientes y solicitudes
Automatización de confirmaciones
Integración con APIs externas
Métricas comerciales avanzadas
```

Estas funcionalidades se implementarán solo si el cliente decide avanzar a una nueva etapa del proyecto.

## Mantenimiento recomendado

Revisión semanal inicial:

```txt
Google Analytics 4
Search Console
Eventos clave
Clics a WhatsApp
Pack más consultado
Servicio más consultado
Consultas de búsqueda
Impresiones
Clics orgánicos
Posición promedio
```

Revisión mensual:

```txt
Actualizar fotos
Revisar métricas SEO
Revisar rendimiento de servicios
Publicar nuevas evidencias de trabajos
Evaluar nuevas páginas internas
Revisar oportunidades de contenido local
```

## Notas para el cliente

La web está publicada, indexada en Google y conectada a herramientas de medición.

Actualmente permite medir:

```txt
Visitas
Clics en cotización
Clics en WhatsApp
Packs más consultados
Servicios más consultados
Interacción con navegación
Clics hacia redes sociales
```

El siguiente paso comercial recomendado es configurar Google Business Profile para mejorar la presencia local en Google Maps y búsquedas relacionadas con detailing automotriz en El Monte y alrededores.

Además, el proyecto queda preparado para una segunda etapa de desarrollo, donde se pueden incorporar funcionalidades como reservas online, integración con Google Calendar, formularios avanzados y panel administrativo, en caso de que el cliente quiera avanzar hacia una solución más automatizada.

## Autor / mantenimiento

Proyecto desarrollado y mantenido por:

```txt
manuelContrerasDev
```