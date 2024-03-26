const { createApp } = Vue;

createApp({
    data(){
        return {
            titolo: "Il mio primo esercizio Vue",
            data: '25/03/2024',
            //inputValue: 'ciao', // qui ho inserito il value nell'input
            inputValue: '',
            printedValue: '',
            inputNumberValue: '',
            destination: '',
            discount: '',
            finalPrice: '',
            srcPath: 'https://thumbs.dreamstime.com/b/superficie-praticante-il-surfing-dell-acqua-onda-di-oceano-mare-124362369.jpg',
            propertyNames:{
                id: 'myId',
                class: 'myClass'
            },
            names: ['Rachel', 'Anne', 'Patrocinio']
        }
    },
    methods: {
        printValue(){
            console.log("click del button");
            this.printedValue = this.inputValue;
            this.inputValue = '';
        },
        calculatePrice(){
            let km0 = 524;
            let km1 = 275;
            let km2 = 335;
            let price;
            let discount;
            console.log('Calcolo Prezzo');
            if(this.destination === '0'){
                price = km0 * 0.21;
            } else if (this.destination === '1'){
                price = km1 * 0.21;
            } else if (this.destination === '2'){
                price = km2 * 0.21;
            }

            if(this.discount === '0'){
                discount = 0;
            }else if(this.discount === '1'){
                discount = price * 0.2;
            } else if(this.discount === '2'){
                discount = price * 0.4;
            }

            const finalPrice = price - discount;
            this.finalPrice = finalPrice.toFixed(2);

            this.destination = '';
            this.discount = '';
        },
        isMultipleOf(n,divider){
            if ( n % divider === 0){
                true;
            } else{
                false;
            }
        }
    }
}).mount('#app');