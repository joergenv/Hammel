<template>
  <v-app id="inspire">
    <v-navigation-drawer floating v-model="drawer" app>        
         <v-list density="compact" nav>
          <v-list-item-title>Guide</v-list-item-title>          
          <v-list-item prepend-icon="mdi-home" title="Hjem" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-account-circle-outline" title="Login" value="login" to="/login"></v-list-item>
          <v-list-item prepend-icon="mdi-cards-playing-outline" title="Memory" value="Memorygame" to="/memorygame"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="Brugere" value="users" to="/users"></v-list-item>
          <v-list-item prepend-icon="mdi-brightness-5" title="Mærker" value="manufacturers" to="/manufacturers"></v-list-item>
          <v-list-item prepend-icon="mdi-tractor-variant" title="Traktorer" value="tractors" to="/tractors"></v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
  
</script>

<script>
  export default {
    data: () => ({ drawer: false }),
  }
</script>