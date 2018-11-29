<template>
  <div class="practices-new">
    <h1>Session ID: {{practice.id}}</h1>
  
  <div>
  <button v-on:click="createPractice()">Create a practice</button>
  </div>

  </div>
</template>

<style>

.practice-new {
  height: 1000px;
}
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
        .post("/api/practices")
        .then(response => {
          this.practice = response.data;
        });
      }
    }
  }
</script>
