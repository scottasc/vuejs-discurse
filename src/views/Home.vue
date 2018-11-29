<template>

  <div class="home">

    <h6 v-if="localStorage">Logged in</h6>

    <section id="banner">

      <div class="inner1">
        <h2 class="main-title">Huely</h2>
        <h3>Free online color therapy</h3>
        
        <button class="actions special button primary" v-if="localStorage" v-on:click="createPractice()">Begin</button>
        <button class="actions special button primary" v-else v-on:click="showModal()">Begin</button>

      </div>

      <a href="#one" class="more scrolly">Learn More</a>
    </section>

      <div>
         <transition name="modalfade"><modal v-if="show"></modal></transition>
      </div>

     <section id="one" class="wrapper style1 special">
      <div class="inner">
        <header class="major">
          <h2>DEAR GOD WHAT IS THIS PLACE</h2>
          <p>Color therapy is the idea that colors can be therapeutic. Avicenna, a medieval Persian physician, noted that the color red makes the blood flow quicker, while the color blue does the opposite. Using this simple relationship—warm colors like reds and oranges to energize you, cool colors like blues and greens to relax you—Huely listens to your thoughts, determines your emotions, and chooses therapeutic colors just for you.</p>
        </header>
        <ul class="icons major">
          <li><span class="icon fa-heart-o major style2"><span class="label">Ipsum</span></span></li>
        </ul>
      </div>
    </section>


          <section id="three" class="wrapper style3 special">
            <div class="inner">
              <header class="major">
                <h2>How does it work?</h2>
                <p>Huely uses IBM Watson's Natural Language Understanding AI to determine the sadness, fear, anger, disgust, and joy of every thought you share. These emotional ratings are used to construct a color: sadness increases red hues, fear and disgust increase green hues, and anger increases blue hues. The result is a custom, therapeutic hue calibrated to your exact emotion.</p>
              </header>
              <ul class="icons major">
          <li><span class="icon fa-heart-o major style2"><span class="label">Ipsum</span></span></li>
        </ul>
            </div>
          </section>

    <footer id="footer">
        <ul class="icons">
          <li><a href="#" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
        </ul>
        <ul class="copyright">
          <li>&copy; Huely 2018</li>
        </ul>
      </footer>
  </div>
</template>

<style>

.modalfade-enter-active {
  transition: all .3s ease;
}
.modalfade-leave-active {
  transition: all .3s ease;
}
.modalfade-enter, .modalfade-leave-to {
  opacity: 0;
}

.home {
  background:radial-gradient(ellipse at bottom, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 75%);
}

.inner1 {
  bottom: 20%;
}

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
      show: false,
      localStorage: localStorage.jwt
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

