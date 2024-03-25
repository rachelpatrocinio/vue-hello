const { createApp } = Vue;

createApp({
    data(){
        return {
            titolo: "Il mio primo esercizio Vue",
            data: '25/03/2024',
            //inputValue: 'ciao', // qui ho inserito il value nell'input
            inputValue: '',
            printedValue: ''
        }
    },
    methods: {
        printValue(){
            console.log("click del button");
            this.printedValue = this.inputValue;
            this.inputValue = '';
        }
    }
}).mount('#app');