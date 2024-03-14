console.log("ciao");

const { createApp } = Vue

createApp({
    data() {
        return {
            // qui per le task che inseriamoi nell'input
            newTask: "",
            tasks: [
                "learn php",
                "learn js",
                "learn c++",
            ]


        }
    },
    methods: {

        addTask() {
            console.log("add", this.newTask);
            this.tasks.unshift(this.newTask)  
            // con unshift metto la stringa nuova sopra a tute le altre 
        }
   
    }
}).mount("#app")


console.log(tasks);


