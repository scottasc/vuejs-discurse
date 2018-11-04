<template>
  <div class="home">
    
    <section id="banner">

      <div class="inner">
        <h2>Huely</h2>
        <p>Free online color therapy</p>

        <button class="actions special button primary" v-on:click="createPractice()">Begin</button>
        <button class="actions special button primary" v-on:click="showModal()">Login</button>
      </div>

      <a href="#one" class="more scrolly">Learn More</a>
    </section>

    <div>
    <modal v-if="show" id="hide"></modal>
    </div>

     <section id="one" class="wrapper style1 special">
      <div class="inner">
        <header class="major">
          <h2>DEAR GOD WHAT IS THIS PLACE</h2>
          <p>Using the closely-guarded secrets of medieval Islamic color psychology, Capstone listens to your thoughts and picks a special color just for you.</p>
        </header>
        <ul class="icons major">
          <li><span class="icon fa-diamond major style1"><span class="label">Lorem</span></span></li>
          <li><span class="icon fa-heart-o major style2"><span class="label">Ipsum</span></span></li>
        </ul>
      </div>
    </section>

  </div>
</template>

<style>

</style>

<script>
import Modal from './Modal';
import axios from "axios";
export default {
  components: {
    'modal': Modal
  },
  data: function() {
    return {
      practice: {},
      show: false
    };
  },
  created: function() {
  },
  methods: {
    createPractice: function() {
      axios
        .post("http://localhost:3000/api/practices")
        .then(response => {
          this.practice = response.data;
        });
        location.href = "/#/thoughts/new"
    },
    showModal: function() {
      this.show = !this.show;
    }
  },
  mounted: function() {
    this.$on('setFalse', function(value) {
      this.show = value;
    });
  }
}
</script>

