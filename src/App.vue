<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link :to="{name: 'applePage'}">to apple</router-link>
    <router-link :to="{path:'banana'}">to banana</router-link>
    <router-link :to="{path:'apple/red'}">to apple red</router-link>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
//  data (){
//      return{
//        a : 'apple'
//      }
//  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
