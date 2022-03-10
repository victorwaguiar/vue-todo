<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
        <v-icon>
          mdi-dots-vertical
        </v-icon>

        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        ><!-- o código acima  abre   a opção editar ou excluir no evento click -->
        <v-icon left>{{ item.icone }}</v-icon>

          <v-list-item-title>{{ item.title }}</v-list-item-title>
        
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar  
    v-if="items[0].modal"
    @fechaModal="items[0].modal = false"
    :tarefa="tarefa"
    /> 
    <!-- aqui acima é onde chamamos a caixa de diálogos 
    que é um componente, @fechaModal serve para fechar a caixa de diálogo -->
    <ModaDelete 
     v-if="items[1].modal"
    @fechaModal="items[1].modal = false"
    :tarefa="tarefa"
    />
  </div>
</template>

<script>
import ModaDelete from '../Modal/ModaDelete.vue'
import ModalEditar from '../Modal/ModalEditar.vue'
export default {
    props:['tarefa'],  
    components: { ModalEditar, ModaDelete },
      data: () => ({
        items: [
          {
              icone:"mdi-pencil",
              title: 'Editar',
              modal: false,
              click(){
                  console.log("Editar")
                  this.modal = true
              }
          },
          {
              icone:"mdi-trash-can", 
              title: 'Excluir',
              modal: false,
              click(){
                  console.log("Excluir")
                  this.modal = true
              }
            
        },
      ],
    }),
/*     methods:{
      teste(){
        console.log('teste')
        //this.items[0].modal = !this.items[0].modal
      }
    }  */
  }
</script>

<style>

</style>