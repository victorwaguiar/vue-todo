<template>
  <div>
    <v-col
    cols="12"

    >
    <v-text-field 
        v-model="campoInput"
        label="Qual a sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTarefa"
    > <!-- aqui iremos criar funções "handle" para as tarefas e fazer com que elas apareçam na tela -->
    </v-text-field>
    </v-col>

  </div>
</template>

<script>
export default {
    data(){
        return{
        campoInput: null, /* aqui inicia a ação de inserir novas tarefas dinamicamente */
        }
    },
    methods:{
    handleAddTarefa(){
    //this.$store.commit('adicionaTarefa', this.campoInput) 
    this.$store.dispatch('adicionaTarefa', this.campoInput) 
    this.campoInput = null;

      }
    }

}
</script>

<style>

</style>