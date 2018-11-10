<template>
  <div class="hue">


   <button v-on:click="makeUser()">Create user</button>
   <button v-on:click="whatsName()">Name?</button>
   <button v-on:click="newUser()">New user</button>

  <div>
  <button class="actions special button primary" v-on:click="turnOn()">Turn on</button>
  </div>

  <div>
  <button class="actions special button primary" v-on:click="turnOff()">Turn off</button>
  </div>

  <div>
  <button class="actions special button primary" v-on:click="test()">Find bridge</button>
  <h2>{{bridgeInfo}}</h2>
  </div>

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
      bridgeInfo: "",
      powerSwitch: true
    };
  },
  components: {},
  methods: {
    turnOn: function() {
      user.setLightState(1, {on: this.powerSwitch});
      this.powerSwitch = !this.powerSwitch
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
         this.bridgeInfo = 'No bridges found. :(';
        }
        else {
          bridges.forEach(b => this.bridgeInfo = 'Bridge found at IP address ' + b.internalipaddress);
    }
      }).catch(e => this.bridgeInfo = 'Error finding bridges', e);
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
