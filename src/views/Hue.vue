<template>
  <div class="hue">

    <h2 v-if="userName">Username: {{userName}}</h2>

    <h2 v-if="iPaddress">IP address: {{iPaddress}}</h2>

   <div>
      <form v-on:submit="submit($event)">
        <label>Username:</label>
        <input type="text" class="form-control">
      </form>
    </div>

    <div>
      <form v-on:submit="submitIP($event)">
        <label>Bridge IP address</label>
        <input type="text" class="form-control">
      </form>
    </div>

  <div>
  <button class="actions special button primary" v-on:click="test()">Find bridge IP address</button>
  <h2>{{bridgeInfo}}</h2>
  </div>

  <div>
  <button class="actions special button primary" v-on:click="whatsName()">Get username</button>
  <h2>{{userName}}</h2>
  </div>

  <div>
  <button class="actions special button primary" v-on:click="turnOn()">Test</button>
  </div>

  <div>
  <button class="actions special button primary" v-on:click="makeUser()">Create user</button>
  </div>

  <div>
  <button class="actions special button primary" v-on:click="newUser()">Make new user</button>
  </div>
  

 

  </div>
</template>

<style>

  .hue {
    margin-top: 200px;
  }
  
  .button {
    margin-top: 100px;
  }
</style>


<script>
var jsHue = require('jshue');
var hue = jsHue();
var bridge = hue.bridge('192.168.1.77');
var user = bridge.user('O-j-MtGZ85H0wcaFdIKhfzbC8QBMLDxcn5TkkHqs')

export default {
  name: 'home',
  data: function() {
    return {
      bridgeInfo: '',
      userName: '',
      iPaddress: '',
      powerSwitch: true
    };
  },
  components: {},
  methods: {
    submit: function(event) {
      this.userName = event.target[0].value;
      var user = bridge.user(this.userName)
    },
    submitIP: function(event) {
      this.iPaddress = event.target[0].value;
    },
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
