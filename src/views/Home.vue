<template>

  <div class="home"> 

    <form v-on:submit.prevent="submit()">
      <label>---></label>
      <input type="text" class="form-control" v-model="content">
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>

    <button v-on:click="changeColor()">Color time?</button>

  </div>

</template>

<style>

body {
  transition: 7s;
}

</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      content: "",
      thought: {}
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {content: this.content};
      axios
        .post("http://localhost:3000/api/thoughts", params)
        .then(response => {
          this.thought = response.data;
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
        this.content = "";
        document.body.style.backgroundColor = `rgb(${this.thought.red}, ${this.thought.green}, ${this.thought.blue})`;
    }
  }
};
</script>