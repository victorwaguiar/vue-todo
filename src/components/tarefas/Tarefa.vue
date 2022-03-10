<template>
  <div>
         <v-list-item
         :class="{'blue lighten-4':tarefa.concluido}"
         @click="tarefa.concluido = !tarefa.concluido"
         
         >
         <!-- o código acima verifica se a tarefa está marcada ou não para alterar a cor de fundo -->
          <template v-slot:default="{}">
            <v-list-item-action>
              <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
            </v-list-item-action><!-- aqui o checkobx recebe o valor de concluído true-->

            <v-list-item-content> <!-- aqui chamamos a props que irá retornar o título da tarefa -->
              <v-list-item-title
              :class="{'text-decoration-line-through': tarefa.concluido}"
              ><!-- o codigo acima verifica se a tarefa esta marcada e marca com uma linha no meio -->{{tarefa.titulo}}</v-list-item-title>
            </v-list-item-content>
            
            <v-list-item-action>
            <!-- <v-btn 
            icon
            @click.stop="handleRemoveTarefa(tarefa.id)"
            >
                <v-icon color="red lighten-1">mdi-trash-can</v-icon>
            </v-btn>  --> <!-- @click.stop="" faz com que a terefa não seja marcada ao clicar na lixeira  -->
            
            <TarefaMenu 
              :tarefa="tarefa"
            />
            </v-list-item-action>

          </template>
        </v-list-item>
        <v-divider> </v-divider> <!-- serve para separar as tarefas com uma linha -->
  </div>
</template>

<script>
import TarefaMenu from "./TarefaMenu.vue"

export default {
    /* para receber as tarefas do Tarefas.vue iremos criar uma props  */
    components: {TarefaMenu},
    props:['tarefa'],
    methods:{
        handleRemoveTarefa(id){
            this.$store.commit('removeTarefa', id)
        }
    }

}
</script>

<style>

</style>