//Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

Vue.config.devtools = true;

const app = new Vue(
    {
        el: "#root",
        data: {
            newToDo: "",
            toDos: [
                "Fare i compiti",
                "Fare la spesa",
                "Fare il bucato"
            ]
        },
        methods: {
            addToDo(){
                if(this.newToDo != ""){
                    this.toDos.push(this.newToDo);
                    this.newToDo = "";
                }
            },

            removeToDo(i){
                this.toDos.splice(i, 1);
            }

        }
    }
) 