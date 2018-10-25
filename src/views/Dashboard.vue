<template>
  <div class="dashboard">
    <h1>{{ practices }}</h1>
    <button v-on:click="getData()">Get data</button>
  </div>
</template>

<style>
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
