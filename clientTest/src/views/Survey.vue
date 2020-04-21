<template>
  <div class="survey">
    <Welcome  />
    <div >
			<h3>How do you feel today?</h3>
			<form @submit.prevent="send()">
				<!-- will make it rander from data -->
				<div class="form-group  emogi">    
					<div class="form-check ">
						<img src="../../public/img/1.jpg" width="200px" alt="">
						<label class="form-check-label" for="1">
						<input class="form-check-input" type="radio"  id="1" value="1" v-model="checked"/> 
						1
						</label>
					</div>
					<div class="form-check">
						<img src="../../public/img/2.jpg" width="200px" alt="">
						<label class="form-check-label" for="2">
						<input class="form-check-input" type="radio"  id="2" value="2" v-model="checked"/> 
						2 </label>
					</div>
					<div class="form-check">
						<img src="../../public/img/3.jpg" width="200px" alt="">
						<label class="form-check-label" for="3">
						<input class="form-check-input" type="radio"  id="3" value="3" v-model="checked"/> 
						3 </label>
					</div>
					<div class="form-check">
						<img src="../../public/img/4.jpg" width="200px" alt="">
						<label class="form-check-label" for="4">
						<input class="form-check-input" type="radio"  id="4" value="4" v-model="checked"/> 
						4 </label>
					</div>
					<div class="form-check">
						<img src="../../public/img/5.jpg" width="200px" alt="">
						<label class="form-check-label" for="5">
						<input class="form-check-input" type="radio"  id="5" value="5" v-model="checked"/> 
						5 </label>
					</div>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-info" @click="logoutSubmit()">Submit</button>
				</div>
      </form>
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Menu'

export default {
  components : {Welcome},
  data(){
      return {
        checked:null,

      }
  },
  methods:{
		send(){
			if(this.checked == null){
				alert('check only one case');
			}else
				console.log("you check "+ this.checked.toString());
      this.$store
      .dispatch('loginSubmit', {
        email: this.email,
        password: this.password 
      })
      .then( () => {
          this.$router.push({name:'SurveyRouter'})
      })
		},
		logoutSubmit(){
			console.log('logout')
			this.$store.dispatch('logout')
			// this.$router.push({name:'HomeRouter'})
			// location.reload()

		}
    }

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
.emogi{
	display:flex;
	padding:20px 15% 20px 15%
}
.survey{
	padding-top: 10% 
}
</style>
