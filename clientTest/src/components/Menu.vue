<template>
  <div class="welcome">
    <h1>Welcome {{ user.name }}</h1>
  </div>
</template>

<script>

export default {
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>