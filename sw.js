/**
 *  Service Workers orchestrator
 *  Los service workers se instalan en la computadora del usuario. 
 *  No al igual que una aplicacion nativa.
 *
 *  Service Workers Events
 *  install : Cuando se instala el SW
 *  activate: Cuando se activa el SW
 *  push    : Cuando se recibe una Notificación push
 *  fetch   : Cuando se ejecuta un fetch
 *  sync    : Cuando se recupera la conexion a internet y se quiere ejecutar una sincronizacion
 *  mesage  : Cuando se recibe un mensaje de altug tab o de la aplicacion
 *  */  

// Se invoca cuando el navegador instala el Service Worker
self.addEventListener('install', event => {
    /**
     * Crear Pre-cache
     * Retornar lo existente en cache al navegador
     */
    console.log(event);
    console.log('Installing sw...');
    event.waitUntil( precache() );

})

async function precache() {
    /**
     * caches.open: devuelve una promesa que será la instancia de un cache llamada v1
     */
    const cache = await caches.open("v1");
    cache.addAll( [
        '/',            // Raiz del sitio (aunque devuelva /index.html)
        '/index.html',
        '/src/index.js',
        '/src/MediaPlayer.js',
        '/src/plugins/AutoPlay.js',
        '/src/plugins/AutoPause.js',
        '/pages/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
}

// Service worker Interceptor
// self.addEventListener('fetch', event => {
//     if( event.request.url.includes('index.css') ){
//         let respuesta = new Response(
//         // Cuerpo de la respuesta
//         `
//             body {
//                 background-color: teal;
//                 color: red;
//             }
//         `, { // Especifica el formato de la respuesta para que no quede como texto plano
//             headers: {
//                 'Content-Type': 'text/css'
//             }
//         });
//         event.respondWith(respuesta)
//     } else {
//         event.respondWith( fetch( event.request ) );        
//     }
// })