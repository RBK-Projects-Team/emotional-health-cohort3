<template>
  <div class="log_in">
    <form class="form-signin" @submit.prevent="loginSubmit()" style="padding:5% 40% 25% 40%">
        <div class="form-group">
            <label for="email">email</label>
            <input type="text"  name="email" class="form-control"  v-model="email" required autofocus />
            <!-- <div v-show="submitted && !email" class="invalid-feedback">email is required</div> -->
        </div>
        <div class="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"  name="password" class="form-control" v-model="password" required/>
            <p v-if="status === 400">
              Invalid login info.
            </p>
            <!-- <div v-show="submitted && !password" class="invalid-feedback">Password is required</div> -->
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-login" >Login</button>
        </div>
        <!-- <p>{{error}}</p> -->
    </form>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      status: null
    }
  },

  methods:{
    loginSubmit() {
      this.$store
      .dispatch('loginSubmit', {
        email: this.email,
        password: this.password 
      })
      .then( () => {
          this.$router.push({name:'SurveyRouter'})
      })
      // .catch(err =>{
      //   this.error = err.response.data.error
      // })
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
