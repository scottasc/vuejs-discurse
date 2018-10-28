<template>
  <div class="home">
    



    <section id="banner">

      <div class="inner">
        <h2>Capstone</h2>
        <p>Free online color therapy</p>
        <button class="actions special button primary" v-on:click="createPractice()">Try it</button>
      </div>

      <a href="#one" class="more scrolly">Learn More</a>
    </section>

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

    

    <section id="cta" class="wrapper style4">
      <div class="inner">
        <header>
          <h2>It's free</h2>
          <p>And it makes you feel nice.</p>
        </header>
        <ul class="actions stacked">
          <li><a href="/#/signup" class="button fit primary">Sign Up</a></li>
          <li><a href="/#/login" class="button fit">Log In</a></li>
        </ul>
      </div>
    </section>



  </div>
</template>

<style>

</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      practice: {}
    };
  },
  created: function() {},
  methods: {
    createPractice: function() {
      axios
        .post("http://localhost:3000/api/practices")
        .then(response => {
          this.practice = response.data;
        });
        location.href = "/#/thoughts/new"
      }
    }
  }
</script>