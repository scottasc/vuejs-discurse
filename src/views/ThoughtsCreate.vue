<template>

  <div class="thoughts-new"> 


    <div class="input">
      <form v-on:submit.prevent="submit()">
        <label v-if="errors">{{errors}}</label>
        <label v-else>Say stuff</label>
        <input type="text" class="form-control" v-model="content">
      </form>
      <div><button class="end-btn btn btn-primary" v-on:click="endSession()">End session</button></div>
    </div>

  </div>

</template>

<style>

.btn {
  margin-top: 3%;
}

.input {
  bottom: 0;
  position: absolute;
  width: 100%;
}

.thoughts-new {
  height: 1000px;
}

body {
  transition: 6s;
}


</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      content: "",
      thought: {red: 255, green: 255, blue: 255},
      errors: "",
      practice: {}
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      if (this.content && this.content.length > 15) {
        this.errors = ""
        var params = {content: this.content};
        axios
          .post("http://localhost:3000/api/thoughts", params)
          .then(response => {
            this.thought = response.data;
            document.body.style.backgroundColor = `rgba(${this.thought.red}, ${this.thought.green}, ${this.thought.blue}, .5)`;
          })
          .catch(errors => {
            this.errors = errors.response.data;
          });
          this.content = "";
      } else {
        this.errors = "At least 15 characters worth of stuff"
      }
    },
    endSession: function(){
      axios
        .patch("http://localhost:3000/api/practices")
        .then(this.$router.push("/dashboard"));
      }
  }
};
</script>