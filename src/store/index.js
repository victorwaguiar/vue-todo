import Vue from 'vue'
import Vuex from 'vuex'

import Localbase from 'localbase' /* aqui estamos instâciando o localbase */
let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas:[
     /*  {id:1, titulo:"Ir ao mercado", concluido:false},
      {id:2, titulo:"Comprar ração", concluido:false}, */
      
    ] 
  },
  mutations: {
    buscaTarefas(state){ 
      db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB
      })
    },
    adicionaTarefa(state, titulo){
      
      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo,
        concluido: false
      })
 /* aqui é onde são adicionadas  as tarefas alterando o state
           através da mutation */
    },
 
  },/* as actions são responsáveis por agilizar
  o processo de busca e "reload" das tarefas, 
  lembrando que abaixo está sendo utilizado localbase */
  actions: {
   async adicionaTarefa({commit},titulo){
    await commit('adicionaTarefa', titulo)
    await commit('buscaTarefas')
    },
    editaTarefa({commit}, novaTarefa){
      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
      titulo: novaTarefa.titulo
      }).then(()=>{
        commit('buscaTarefas')
      })
    },
    removeTarefa({commit}, id ){
      db.collection('tarefas').doc({ id }).delete().then(()=>{
        commit('buscaTarefas')
      })
    }
  },
  modules: {
  }
})
/* a mutations é responsável por mudar um state,
 pois ele não consegue ser mudado dentro de outro componente */