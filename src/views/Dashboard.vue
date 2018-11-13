<template>

  <h1 class="less-two" v-if="practices.length < 2">You need at least 2 sessions for the dash to work.</h1>
  <div v-else class="dashboard">

    <h1 id="dash-header">Dash</h1>
    <h2 id="dash-header2">{{practices.length}} sessions</h2>
    <hr>
    
  <div class="metrics">
    
    <h4>Joy by session</h4>
    <trend
      :data="joy"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
      auto-draw-duration=7000
      auto-draw-easing="ease-in">
    </trend>
    <hr>

    <h4>Sadness by session</h4>
    <trend
      :data="sadness"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
      auto-draw-duration=7000
      auto-draw-easing="ease-in">
    </trend>
    <hr>

    <h4>Fear by session</h4>
    <trend
      :data="fear"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
      auto-draw-duration=7000
      auto-draw-easing="ease-in">
    </trend>
    <hr>

    <h4>Disgust by session</h4>
     <trend
      :data="disgust"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
      auto-draw-duration=7000
      auto-draw-easing="ease-in">
    </trend>
    <hr>

    <h4>Anger by session</h4>
    <trend
      :data="anger"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
      auto-draw-duration=7000
      auto-draw-easing="ease-in">
    </trend>
    <hr>
    
    <h4>Thoughts by session</h4>
    <trend
      :data="thoughts"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
      auto-draw-duration=7000
      auto-draw-easing="ease-in">
    </trend>
    <hr>
  </div>

  </div>
</div>
</template>

<style>

/*.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s ease;
}
.fade-enter-to, .fade-leave-to {
  opacity: 0;
}*/

.less-two {
  padding-top: 200px;
}

ul {
  list-style-type: none;
}

#dash-header {
  padding-top: 100px;
  font-size: 75px;
  line-height: 20%;
}

#dash-header2 {
  line-height: 10%;
}

hr {
  background: linear-gradient(to right, #B7E8EB, white, #B7E8EB);
  height: 10px;
  border: none;
}

/*.metrics {
  height: 25%;
}*/


</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      practices: [],
      thoughts: [],
      joy: [],
      sadness: [],
      fear: [],
      anger: [],
      disgust: []
    };
  },
  created: function() {
  },
  mounted: function() {
    axios
        .get("http://localhost:3000/api/practices")
        .then(response => {
          this.practices = response.data;
          for (var i = 0, len = response.data.length; i < len; i++) {
            this.thoughts.push(response.data[i].thought_count);
            this.joy.push(response.data[i].joy * 10);
            this.sadness.push(response.data[i].sadness * 10);
            this.fear.push(response.data[i].fear * 10);
            this.disgust.push(response.data[i].disgust * 10);
            this.anger.push(response.data[i].anger * 10);
           }
        });
  },
  methods: {}
}
</script>