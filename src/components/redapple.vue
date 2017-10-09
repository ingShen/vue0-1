<template>
  <div id="hello">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name:'hello',
    data () { // data : function (){}
      return {
        msg: 'i\'m a redapple'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

