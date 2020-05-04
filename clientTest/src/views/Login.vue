<template>
  <div class="log_in">
    <form class="form-signin" @submit.prevent="loginSubmit()" style="padding:5% 40% 25% 40%">
        <div class="form-group">
            <label for="username">username</label>
            <input  v-model="username" type="text" class="form-control" name="username" />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password"  name="password" class="form-control" />
            <p v-if="status === 400">
              Invalid login info.
            </p>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-login" >Login</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      status: null
    }
  },

  methods:{
    loginSubmit() {
      this.$store
      .dispatch('loginSubmit', {
        username: this.username,
        password: this.password 
      })
      .then( () => {
          this.$router.push({name:'SurveyRouter'})
      })
      .catch(err =>{
        this.status = err.response.status
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
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
.btn-login{
  background-color: #b51983;
  border-color:#b51983
}
.btn-login:hover{
  background-color: #b51983;
  border-color:#b51983
}
.btn-login:active{
  background-color: #b51983;
  border-color:#b51983
}
</style> 
