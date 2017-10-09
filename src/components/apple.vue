<template>
  <div id="apple">
    {{ msg }}
    <button @click="getParam"> get Param</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'banana',
    data () { // data : function (){}
      return {
        msg: 'i\'m a apple'
      }
    },
    methods: {
        getParam (){
            console.log(this.$route.params)
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

