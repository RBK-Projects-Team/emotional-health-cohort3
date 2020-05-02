<template>
  <div class="survey">
    <Welcome  />
    <div class="container" >
			<form @submit.prevent="surveySubmit()" @change="onChange($event)">
				<!-- will make it rander from data -->
				<div class="form-group ">    
					<div class="form-check blockStyle">
						<img src="../../public/img/1.jpg" width="200px" alt="">
						<label class="form-check-label" for="1">
						<input class="form-check-input" type="radio"  id="1" v-bind:value="1" v-model="picked"/> 
						1	</label>
					</div>
					<div class="form-check blockStyle" >
						<img src="../../public/img/2.jpg" width="200px" alt="">
						<label class="form-check-label" for="2">
						<input class="form-check-input" type="radio"  id="2" v-bind:value="2" v-model="picked"/> 
						2 </label>
					</div>
					<div class="form-check blockStyle">
						<img src="../../public/img/4.jpg" width="200px" alt="">
						<label class="form-check-label" for="3">
						<input class="form-check-input" type="radio"  id="3" v-bind:value="3" v-model="picked"/> 
						3 </label>
					</div>
					<div class="form-check blockStyle">
						<img src="../../public/img/5.jpg" width="200px" alt="">
						<label class="form-check-label" for="4">
						<input class="form-check-input" type="radio"  id="4" v-bind:value="4" v-model="picked"/> 
						4 </label>
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
			picked:""
      }
  },
  methods:{
		surveySubmit() {
      this.$store
      .dispatch('surveySubmit', {
        token: "dfsdfdsfdsf",
        emotion: this.picked
      })
      .then( () => {
          //this.$router.push({name:'SurveyRouter'})
          console.log('From Survey View : SurveySubmit() OK')
      })
      .catch(err =>{
        this.status = err.response.status
      })
    },
		onChange(event) {
			console.log(event.target.value)
			this.picked = event.target.value;
			console.log("Picked is now :"+this.picked)
        },
		logoutSubmit(){
          //this.$store.dispatch('logout')
          //location.reload()
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
	padding-top: 5% 
}
.blockStyle{
    display: inline-grid;
    padding-right: 10%;
    padding-top: 5%;
}
</style>
