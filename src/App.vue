<template>
  <v-app id="inspire">
  
    <v-navigation-drawer 
       v-model="drawer"
      app
    >
      <v-img
      src="./assets/bg.jpg"
      gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      dark
      class="pt-5 text-center"
      > 
      
       <v-avatar
       size="100"
       >
        <img
        src="./assets/todo.png"
        alt="John"
       >
       </v-avatar>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vue.js
          </v-list-item-title>
          <v-list-item-subtitle >
            Lista de tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to" 
          link
        > <!-- :to="item.to" aqui o java <script> </script> procura o direcionamento criado em scripts ao final da página -->
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

   <!--  <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->

     <v-app-bar
      app 
      prominent
      height="191"
      color="#fcb69f"
      dark
      src="./assets/bg.jpg"
      
      
    > <!-- não esquecer do elemento app, pois ele organiza o layout da página, sem ele tudo fica bagunçado -->
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
 <!-- Aqui é onde ativa/desativa o menu lateral -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <center> 
      <v-app-bar-title
      class="mt-10"
      >
        
        <InputTarefa />
      </v-app-bar-title>
      </center>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
     <router-view/> <!-- esse componente direciona as páginas para o escopo central  -->
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from './components/tarefas/InputTarefa.vue'
  export default {
  components: { InputTarefa },
    data: () => ({ 
      drawer: null, // drawer é o componente que controla o menu lateral
      items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to:'/' },// ", to:'/' serve para direcionar para página desejada  "
          { title: 'Sobre', icon: 'mdi-help-box', to:'/Sobre' }, // ", to:'/Sobre' serve para direcionar para página desejada  "
          ]
      }),
  }
</script>