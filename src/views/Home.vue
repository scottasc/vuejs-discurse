<template>

  <div class="home" :style="{ backgroundColor: `rgb(${thought.red}, ${thought.green}, ${thought.blue})` }"> 

    <form v-on:submit.prevent="submit()">
      <label>Enter a thought:</label>
      <input type="text" class="form-control" v-model="content">
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>

  </div>
</template>

<style>

.home {
  transition: 7s;
  width: 100%;
  height: 100%;
  margin: 0px;
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
    }
  }
};
</script>