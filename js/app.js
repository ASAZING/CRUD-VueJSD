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
            this.alertas.push({
                alerta: this.nuevaAlerta, estado: false
            })
            this.nuevaAlerta = '';
            localStorage();
        },

        editarAlerta(index) {
            this.alertas[index].estado = true
            localStorage();

        },

        eliminarAlerta(index) {
            this.alertas.splice(index, 1);
            localStorage();
        },

        localStorage() {
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