<template>
  <div id="banana">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'banana',
  data () { // data : function (){}
    return {
      msg: 'i\'m a banana'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
