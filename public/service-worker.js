const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

const ASSETS_TO_CACHE = [
    "/",
    "/index.html",
    "/assets/css/style.css",
    "/assets/js/index.js",
    "/assets/images/icons/icon-192x192.png",
    "/assets/images/icons/icon-512x512.png"
]

//Call install event
self.addEventListener("install", e => {
    console.log("Service worker installed")

    e.waitUntil(
        //Open cache and parse all files 
        caches
            .open(STATIC_CACHE)
            .then(cache => {
                console.log("Service Worker: Caching Files");
                cache.addAll(ASSETS_TO_CACHE)
            })
            .then(() => self.skipWaiting())
    );
});

//Call activate event
self.addEventListener("activate", e => {
    console.log("Service worker activated")
    //Remove unwanted caches
    e.waitUntil(
        //Current cache is not the one we are looping throughh we want to delete it
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName){
                        console.log("Service Worker: Clearing old caches")
                        return caches.delete(cache)
                    }
                })
            )
        })
    );
});

//Call fetch event 
self.addEventListener("fetch", e => {
    console.log("Service Worker: Fetching!")
    //Check if live site is availble else use off site
    e.responseWith(
        fetch(e.request).catch(() => caches.match(e.request))
    )
})

