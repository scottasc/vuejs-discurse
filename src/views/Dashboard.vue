<template>
  <div class="dashboard">

    <h1 id="dashboard">Dashboard</h1>

    <div v-for="practice in practices">
      <h2>Session ID: {{ practice.id }}</h2>
      <ul>
        <li>Number of thoughts: {{ practice.thought_count }}</li>
        <li>Sadness: {{ practice.sadness }}</li>
        <li>Joy: {{ practice.joy }}</li>
        <li>Disgust: {{ practice.disgust }}</li>
        <li>Fear: {{ practice.fear }}</li>
      </ul>
  </div>

  </div>
</template>

<style>

ul {
  list-style-type: none;
}

#dashboard {
  padding-top: 20px;
  font-size: 75px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      practices: {}
    };
  },
  created: function() {
      axios
        .get("http://localhost:3000/api/practices")
        .then(response => {
          this.practices = response.data;
        });
  },
  methods: {}
}
</script>
