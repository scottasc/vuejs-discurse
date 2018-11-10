<template>
  <div class="home">



  
   <div>
  <button class="onoff" v-on:click="changeColor()">Change color</button>
  </div>

  <button v-on:click="test()">Find bridge</button>
   <button v-on:click="makeUser()">Create user</button>
   <button v-on:click="whatsName()">Name?</button>
   <button v-on:click="newUser()">New user</button>

     <div>
  <button class="onoff" v-on:click="turnOn()">Turn on</button>
  </div>

     <div>
  <button class="onoff" v-on:click="turnOff()">Turn off</button>
  </div>


  <form v-on:submit="changeColor()">
    <label>X:</label>
    <input type="decimal" class="form-control" v-model="xValue">
    <label>Y:</label>
    <input type="decimal" class="form-control-1" v-model="yValue">
    <input type="submit" class="btn btn-primary" value="Submit">
  </form>

  <h1>{{xValue}}</h1>
  <h1>{{yValue}}</h1>


  </div>
</template>

<style>
  
  .onoff {
    float: bottom;
  }
</style>

<script>
var jsHue = require('jshue');
var hue = jsHue();
var bridge = hue.bridge('10.0.0.210');
var user = bridge.user('O-j-MtGZ85H0wcaFdIKhfzbC8QBMLDxcn5TkkHqs')

// import HelloWorld from '@/components/HelloWorld.vue'

// https://www.meethue.com/api/nupnp

export default {
  name: 'home',
  data: function() {
    return {
      xValue: .1111,
      yValue: .8888
    };
  },
  components: {},
  methods: {
    changeColor: function() {
      user.setLightState(1, { sat: 50, bri: 100, xy: [this.xValue, this.yValue] })
    },
    turnOn: function() {
      user.setLightState(1, {on: true});
    },
    turnOff: function() {
      user.setLightState(1, {on: false});
    },
    newUser: function() {
      var user = bridge.user('O-j-MtGZ85H0wcaFdIKhfzbC8QBMLDxcn5TkkHqs')
      console.log(user);
    },
    whatsName: function() {
      console.log(bridge.user())
    },
    test: function() {
      hue.discover().then(bridges => {
        if(bridges.length === 0) {
         console.log('No bridges found. :(');
        }
        else {
          bridges.forEach(b => console.log('Bridge found at IP address %s.', b.internalipaddress));
    }
      }).catch(e => console.log('Error finding bridges', e));
    },
  makeUser: function() {
    bridge.createUser('scottaschuelyapp').then(data => {
    // extract bridge-generated username from returned data
    console.log(data);
    var username = data[0].success.username;

    console.log('New username:', username);

    // instantiate user object with username
    var user = bridge.user(username);
      });
    }
  }
}
</script>
