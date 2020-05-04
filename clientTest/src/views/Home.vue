<template>
  <div  v-if="!this.$store.state.user">
      <h1 class="title">You have to login at 11:30AM and at 03:30PM</h1>
  </div>
</template>

<script>

export default {
 
          
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title{
  padding-top: 5%;
}

</style>
