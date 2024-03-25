## VUE JS - Frontend Framework
Vue viene utilizzato per le "single page application": 
- la pagina è sempre la stessa e non viene mai ricaricata. Vue aspetta che gli arrivano i dati e poi esegue. (Aggiorna il DOM)
- Vue non "manipola" il DOM ma crea elementi per il DOM


### Vue può essere utlizzato in due modi: 
- Option API (per il momento utilizzeremo questa modalità)
- Composition API 



#### Vue CDN - with Script Tag: 
    \<script src="https://unpkg.com/vue@3/dist/vue.global.js"\></script\>"

! Importante !

Questo CDN deve essere sempre dichiarato prima del nostro file Javascript !



## ANALIZZIAMO IL CODICE VUE

    <div id="app">{{ message }}</div>

    <script>
    const { createApp } = Vue

    createApp({
        data() {
        return {
            message: 'Hello Vue!'
        }
        }
    }).mount('#app')
    </script>

FILE HTML: 

abbiamo creato un tag \<div> con id="app" e al suo interno stiamo richiamando una proprietà presente nel nostro file JS.

Per richiamare una proprietà bisogna aprire e chiudere 2 volte le parentesi graffe.
    
    <div id="app">{{ message }}</div>

---
FILE JS:

Per prima cosa abbiamo una "Object Destructuring". Quindi sto richiamando una proprietà dell'oggetto VUE. 

Sarebbe stata la stessa cosa scritta cosi:

const createApp = Vue.createApp

    const { createApp } = Vue

---
FILE JS: 

Qui stiamo invocando la funzione createApp() che come parametro ha un oggetto.

Questo oggetto, al suo interno ha una funzione chiamata data()

La funzione data() restiruisce un oggetto.

Questo oggetto avrà al suo interno tutti i dati o tutte le informazioni che ci servono.


    createApp({
        data() {
        return {
            message: 'Hello Vue!'
        }
        }
    })