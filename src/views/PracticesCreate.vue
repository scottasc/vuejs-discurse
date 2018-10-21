<template>
  <div class="practices-new">
    <h1>{{practice}}</h1>
  
  <div>
  <button v-on:click="createPractice()">Create a practice</button>
  </div>

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
      }
    }
  }
</script>
