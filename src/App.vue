<template>
  <div >
    
    <Share />

    <Header />
    <router-view />
    <Footer />
    
  </div>
</template>

<script>

import Share from './components/Share.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
   data() {
    return {
      
    }
  },
  components: {
    Header,
    Footer ,
    Share,
  },
 
 
}
</script>

<style>
body{
  padding:0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
