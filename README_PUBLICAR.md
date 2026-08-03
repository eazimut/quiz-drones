# Quiz Drones AESA — PWA (app instalable)

App web instalable para preparar el examen teórico **STS de AESA**. Funciona offline, se instala en el móvil como una app y guarda tu progreso en el propio dispositivo.

## Qué incluye
- **Simulacro de examen**: 30 preguntas / 30 min / aprobado 75%, solo de las **5 materias que entran con tu A2** (Reglamentación, Limitaciones humanas, Procedimientos, Conocimientos UAS, Riesgo en aire). Excluye Meteorología, Prestaciones y Tierra.
- **Test rápido** (10 preguntas) y **Por materia**, con filtro de niveles (A1/A3 · A2 · STS · Radiofonista).
- **Repaso de fallos con repetición espaciada** (sistema Leitner): las que fallas vuelven pronto; las que aciertas, cada vez más espaciadas.
- **Progreso y estadísticas**: acierto global, dominio por materia, racha diaria, historial de simulacros.
- **Gamificación**: XP, niveles/rangos e insignias.

## Archivos
```
PWA_Quiz_Drones/
├─ index.html              ← la app
├─ preguntas.js            ← banco embebido (generado desde quiz_data/preguntas.json)
├─ manifest.webmanifest    ← metadatos de instalación
├─ sw.js                   ← service worker (offline)
└─ icons/                  ← iconos de la app
```
El banco se genera desde `00_SISTEMA/quiz_data/preguntas.json`. Al añadir preguntas, regenera con:
```
node 00_SISTEMA/quiz_data/generar.js
```
(actualiza el Quiz clásico, el widget, las flashcards de Anki **y** el `preguntas.js` de esta PWA).

---

## Publicarla en una URL gratis (GitHub Pages)

Necesitas una cuenta de GitHub (gratuita). 10 minutos, una sola vez.

1. Entra en https://github.com y crea un repositorio nuevo, p. ej. `quiz-drones`, **público**.
2. En la página del repo pulsa **Add file → Upload files** y arrastra **todo el contenido** de la carpeta `PWA_Quiz_Drones` (el `index.html`, `preguntas.js`, `manifest.webmanifest`, `sw.js` y la carpeta `icons`). Confirma con **Commit changes**.
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
4. Espera 1-2 min y recarga: aparecerá la URL, del tipo `https://TUUSUARIO.github.io/quiz-drones/`.
5. Abre esa URL **en el móvil** e instálala:
   - **iPhone (Safari):** botón Compartir ▵ → **Añadir a pantalla de inicio**.
   - **Android (Chrome):** aparecerá el botón **Instalar la app** dentro de la propia página.

A partir de ahí se abre como app, a pantalla completa y sin conexión. Para actualizarla, vuelve a subir los archivos cambiados (sube el número de versión en `sw.js`, línea `VERSION`, para forzar la actualización de la caché).

### Alternativa aún más simple (sin GitHub)
Sube la carpeta a **Netlify Drop** (https://app.netlify.com/drop): arrastras la carpeta y te da una URL al instante. También sirve como PWA.

### Uso local (sin publicar)
Puedes abrir `index.html` directamente en el navegador del ordenador para practicar. En el iPhone, para que se instale y funcione offline necesita una URL https (pasos de arriba); abrir el archivo suelto desde Archivos no activa el modo app.
