<template>

  <div class="home"> 

    <form v-on:submit.prevent="submit()">
      <label>Input</label>
      <input type="text" class="form-control" v-model="content">
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>

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
      thought: {red: 255, green: 255, blue: 255}
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
          document.body.style.backgroundColor = `rgba(${this.thought.red}, ${this.thought.green}, ${this.thought.blue}, .4)`;
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
        this.content = "";
    }
  }
};
</script>