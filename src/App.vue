<script setup>
import RouterView from 'vue-router'
import Navbar from './components/Navbar.vue' 
import Homepage from './components/HomePage.vue' 
</script>

<template>
  <v-app>
    <Navbar/>
    <v-main>
      <Homepage/>
    </v-main>
  </v-app>
</template>



