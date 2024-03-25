## VUE JS - Frontend Framework
Vue viene utilizzato per le "single page application": 
- la pagina è sempre la stessa e non viene mai ricaricata. Vue aspetta che gli arrivano i dati e poi esegue. (Aggiorna il DOM)
- Vue non "manipola" il DOM ma crea elementi per il DOM


### Vue può essere utlizzato in due modi: 
- Option API (per il momento utilizzeremo questa modalità)
- Composition API 



#### Vue CDN - with Script Tag: 
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"\></script\>"

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

Per richiamare una proprietà bisogna aprire e chiudere 2 volte le parentesi graffe. (Mustache Syntax)
    
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


## DIRETTIVE VUE
 - v-model
 - v-bind
 - v-for
 - v-show
 - v-if / v-elseif / v-else
 - v-on 

### V-MODEL
Utilizzati nei form, input, select ecc.

FILE HTML:

    <select v-model="inputValue">
        <option value="0"> Prima Opzione </option>
        <option value="1"> Seconda Opzione </option>
    </select>

FILE JS: 

    createApp({
        data(){
            inputValue: ''
        }
    })

Ciò che selezionerà l'utente verrà salvato in JS nell'inputValue.

UN ALTRO ESEMPIO:
FILE HTML:

    <input type="text" v-model="inputValue">

FILE JS: 

    createApp({
        data(){
            inputValue: 'Ciaooo'
        }
    })

In questo caso, stiamo inserendo il value tramite JS. Quindi on screen vedremo all'interno dell'input la string "Ciaooo".



---
### V-BIND
(ATTRIBUTE BINDINGS)
Come imposto il valore di un attributo? 

    <div v-bind:class=" propertyName "></div>

Shorthand

    <div :class=" propertyName "></div>

Same Name Shorthand


Se l'attributo coincide con il nome della proprietà possiamo anche scrivere in questo modo:

    <div v-bind:class="class"></div> (Versione estesa)
    <div :class> </div> (Versione Compatta)
---
### V-ON 
V-on viene utilizzato per ascoltare gli eventi. E, poi invoca una funzione.

Per esempio: on click, on scroll, on mouseenter, on mouseleave ecc.

    <button v-on:click="functionName"> CLICK ME <button>

Shorthand 

    <button @click="functionName"> CLICK ME </button>


## DOVE VENGONO SCRITTE LE FUNCTION IN VUE?

Le funzioni in Vue sono elencate in un'altra proprieta dell'oggetto parametro di createApp.
Questa proprità si chiama METHODS.

    createApp({
        data(){
            name: 'Rachel',
            surname: 'Patrocinio'
        },
        methods: {
            functionName(){}
        }
    })

Per poter richiamare una proprietà presente nella funzione data(), bisogna usare la keyword THIS

    createApp({
        data(){
            name: 'Rachel',
            surname: 'Patrocinio'
        },
        methods: {
            functionName(){
                theName = this.name; 
                theSurname = this.surname;
                console.log(theName, theSurname); // Rachel Patrocinio
            }
        }
    })

### Come invochiamo le funzioni?

    <div @click="functionName"></div>

    <div> Il mio nome è {{ functionName() }}
