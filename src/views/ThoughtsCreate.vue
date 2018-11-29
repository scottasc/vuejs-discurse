

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

      <button class="end-btn btn btn-primary" v-on:click="endSession()">End<br/> session</button> 

      
      <div>
      <button class="cloud-btn" v-on:click="toggleClouds()"></button>
      </div>
      
      <div>
      <button class="bird-btn" v-on:click="toggleBird()"></button>
      </div>

      <div>
      <button class="wave-btn" v-on:click="toggleWave()"></button>
      </div>

      <div>
      <button class="bulb-btn" v-on:click="powerSwitch()"></button>
      </div>

    </div>

  </div>

</template>

<style>

.end-btn {
  color: black;
  font-size: 2vh;
  height: 12vh;  
  width: 250px;
  border: none;
  box-shadow: none;
  float: right;
  bottom: 0px;
}

.input {
  bottom: 0;
  position: absolute;
  height: 30vh;
  width: 100%;
}

.thoughts-new {
  height: 100vh;
  position: relative;
}

.wave-btn {
  background-image: url('/../../../assets/css/images/wave.png');
}

.cloud-btn {
  background-image: url('/../../../assets/css/images/cloud.png');
}

.bird-btn {
  background-image: url('/../../../assets/css/images/bird.png');
}

.bulb-btn {
  background-image: url('/../../../assets/css/images/bulb.png');
}

.wave-btn, .cloud-btn, .bird-btn, .bulb-btn {
  background-size: 106px 100px;
  height: 100px;  
  width: 106px;
  border: none;
  float: left;
  box-shadow: none;
}

body {
  transition: 5s;
}


</style>

<script>
var jsHue = require('jshue');
var hue = jsHue();
var bridge = hue.bridge('192.168.1.77');
var user = bridge.user('O-j-MtGZ85H0wcaFdIKhfzbC8QBMLDxcn5TkkHqs')
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
      thought: {},
      errors: "",
      practice: {},
      wave: false,
      clouds: false,
      bird: false,
      power: true
    };
  },
  created: function() {
    user.setLightState(1, {on: false});
  },
  methods: {
    powerSwitch: function() {
      user.setLightState(1, {on: this.power, xy: [1, 1]});
      this.power = !this.power;
    },
    submit: function() {
      if (this.content && this.content.length > 15) {
        this.errors = ""
        var params = {content: this.content};
        axios
          .post("http://localhost:3000/api/thoughts", params)
          .then(response => {
            this.thought = response.data;
            document.body.style.backgroundColor = `rgba(${this.thought.red}, ${this.thought.green}, ${this.thought.blue}, .5)`;
            user.setLightState(1, { transitiontime: 50, bri: 250, xy: [parseFloat(this.thought.x_value), parseFloat(this.thought.y_value)]})
          })
          .catch(errors => {
            this.errors = "You're either not logged in or using an unsupported language. Try again."
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
      user.setLightState(1, {on: false});
      document.body.style.backgroundColor = '#B7E8EB'
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