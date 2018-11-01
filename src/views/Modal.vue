<template>
  <div class="modal-backdrop" v-show="modalGone">

    <div class="modal">
      <button ref="closeModal" class="button primary close-modal-button" v-on:click="hideModal(), setFalse()">X</button>
      <header class="modal-header">
          <button class="actions special button primary" v-on:click="signup = !signup, loginButton = false" v-if="!signup && signupButton">
            Sign up
          </button>
      </header>
      <div class="signup">
       <signup v-if="signup"></signup>
      </div>

       <footer class="modal-footer">
          <button class="actions special button primary" v-on:click="login = !login, signupButton = false" v-if="!login && loginButton">
            Login
          </button>
      </footer>

      <div class="login">
        <login v-if="login"></login>
      </div>

    </div>

  </div>
</template>

<style>

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
  }

  .modal {
    background: #2e3842;
    box-shadow: 2px 2px 20px 2px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    display: center;
    padding: 60px;
    z-index: -500;
    position: relative;
  }

  .modal-header {
    padding-bottom: 10px; 
  }

  .modal-footer {
    padding-top: 40px;
  }

  .close-modal-button {
    position: absolute;
    top: 0px;
    right: 0px;
    box-shadow: 2px 2px 20px -10px;
  }

 

</style>

<script>
import Signup from './Signup';
import Login from './Login';
export default {
  components: {
    'signup': Signup,
    'login': Login
  },
  data: function() {
    return {
      signup: false,
      login: false,
      loginButton: true,
      signupButton: true,
      modalGone: true
    }
  },
  name: 'modal',
  methods: {
    hideModal: function() {
      this.modalGone = false
    },
    setFalse: function() {
      this.$parent.$emit('setFalse', false)
    }
  }
};
</script>