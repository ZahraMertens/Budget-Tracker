const STATIC_CACHE = "static-cache-v1";
const DATA_CACHE = "runtime-cache";

const ASSETS_TO_CACHE = [
    "/",
    "/index.html",
    "/assets/css/style.css",
    "/assets/js/index.js",
    "/assets/images/icons/icon-192x192.png",
    "/assets/images/icons/icon-512x512.png",
]

//Call install event
self.addEventListener("install", e => {
    console.log("Service worker installed")

    e.waitUntil(
        //Open cache and parse all files 
        //Pupulate cache with all available responses which the service worker can use when offline
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
    const currentCaches = [STATIC_CACHE, RUNTIME_CACHE]
    //Remove unwanted caches
    e.waitUntil(
        //Current cache is not the one we are looping throughh we want to delete it
        caches.keys()
        .then((cacheNames) => {
            return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
        })
        .then((cachesToDelete) => {
            return Promise.all(
                cachesToDelete.map((cachesToDelete) => {
                    console.log("Service Worker: Clearing old caches")
                    return caches.delete(cachesToDelete)
                })
            )
        })
        .then(() => self.clients.claim())
    );
});

//Call fetch event 
self.addEventListener("fetch", e => {
    console.log("Service Worker: Fetching!")
    
    //We want to intercept when fetch is fired
    if (e.request.url.includes("/api/")){
        e.respondWith(
            caches.open(DATA_CACHE)
            .then(cache => {
                return fetch(e.request)
                .then(response => {
                    if (response.status === 200){
                        //If res is ok we store the res in our cache
                        cache.put(e.request.url, response.clone());
                    }
                    return response;
                })
                .catch(err => {
                    return cache.match(e.request)
                })
            }).catch(err => console.log(err))
        )
        return;
    }

    e.respondWith(
        caches.match(e.request)
        .then(function(response) {
            return response || fetch(e.request);
        })
    )
})
