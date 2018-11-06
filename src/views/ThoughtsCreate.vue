<template>

  <div class="thoughts-new"> 

    <bird v-if="bird"></bird>

    <clouds v-if="clouds"></clouds>

    <wave v-if="wave"></wave>



    <div class="input">
      <form v-on:submit.prevent="submit()">
        <label v-if="errors">{{errors}}</label>
        <label v-else>Type things</label>
        <input type="text" class="form-control" v-model="content">
      </form>

      <button class="end-btn btn btn-primary" v-on:click="endSession()">End session</button> 

      
      <div>
      <button class="cloud-btn" v-on:click="toggleClouds()"></button>
      </div>
      
      <div>
      <button class="bird-btn" v-on:click="toggleBird()"></button>
      </div>

      <div>
      <button class="wave-btn" v-on:click="toggleWave()"></button>
      </div>

    </div>

  </div>

</template>

<style>

.end-btn {
  margin-top: 3%;
  float: left;
  bottom: 13px;
}

.input {
  bottom: 0;
  position: absolute;
  width: 100%;
}

.thoughts-new {
  height: 1000px;
}

.wave-btn {
  background-image: url('http://chittagongit.com/images/waves-icon-png/waves-icon-png-20.jpg');
}

.cloud-btn {
  background-image: url('http://simpleicon.com/wp-content/uploads/cloud-2-128x128.png');
}

.bird-btn {
  background-image: url('http://icons.iconarchive.com/icons/iconsmind/outline/128/Bird-icon.png');
}

.wave-btn, .cloud-btn, .bird-btn {
  background-size: 106px 100px;
  height: 100px;  
  width: 106px;
  border: none;
  float: right;
  box-shadow: none;
  bottom: 15px;
}

body {
  transition: 6s;
}


</style>

<script>
import axios from "axios";
import Clouds from '../components/Clouds';
import Wave from '../components/Wave';
import Bird from '../components/Bird';
export default {
  components: {
    'clouds': Clouds,
    'wave': Wave,
    'bird': Bird
  },
  data: function() {
    return {
      content: "",
      thought: {red: 255, green: 255, blue: 255},
      errors: "",
      practice: {},
      wave: false,
      clouds: false,
      bird: false
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      if (this.content && this.content.length > 15) {
        this.errors = ""
        var params = {content: this.content};
        axios
          .post("http://localhost:3000/api/thoughts", params)
          .then(response => {
            this.thought = response.data;
            document.body.style.backgroundColor = `rgba(${this.thought.red}, ${this.thought.green}, ${this.thought.blue}, .5)`;
          })
          .catch(errors => {
            this.errors = errors.response.data;
          });
          this.content = "";
      } else {
        this.errors = "At least 15 characters of things"
      }
    },
    endSession: function(){
      axios
        .patch("http://localhost:3000/api/practices")
        .then(this.$router.push("/dashboard"));
      },
    toggleClouds: function() {
      this.clouds = !this.clouds;
    },
    toggleWave: function() {
      this.wave = !this.wave;
    },
    toggleBird: function() {
      this.bird = !this.bird;
    }
  }
};
</script>