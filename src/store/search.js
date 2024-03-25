import {defineStore} from "pinia"


export const useSearchStore = defineStore('search', {
    state: () => {
        return {
            valorBuscado: '',
        }
    },

    getters: {
        value: (state) => {
            return state.valorBuscado
        }
    },

    actions: {
        verValor() {
            console.log(this.valorBuscado)
        }
    }
})