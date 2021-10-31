const app = new Vue({
    el: '#app',
    data: {
        title: 'CRUD CON VUE JS',
        alertas: [

        ],
        nuevaAlerta: ''
    },
    methods: {
        agregarAlerta() {
            if(this.nuevaAlerta !=''){
                this.alertas.push({
                    alerta: this.nuevaAlerta, estado: false
                })
                this.nuevaAlerta = '';
                this.almacenamientoLocal();
            }
        },

        procesarAlerta(index) {
            this.alertas[index].estado = true;
            this.almacenamientoLocal();

        },
        editarAlerta(index){
            this.alertas[index].estado = false;
            this.almacenamientoLocal();
        },

        eliminarAlerta(index) {
            this.alertas.splice(index, 1);
            this.almacenamientoLocal();
        },

        almacenamientoLocal() {
            localStorage.setItem('lstorage-vue', JSON.stringify(this.alertas))
        }
    },
    created() {
        let datosDB = JSON.parse(localStorage.getItem('lstorage-vue'));
        if (datosDB === null) {
            this.alertas = [

            ];

        } else {
            this.alertas = datosDB

        }
    }
})