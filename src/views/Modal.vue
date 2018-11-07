<template>
  <div class="modal-backdrop" v-show="modalGone">
    
    <div class="modal">
      <button ref="closeModal" class="close-modal-button" v-on:click="hideModal(), setFalse()"></button>

      <header class="modal-header">
          <button class="actions special button primary" v-on:click="signup = !signup, loginButton = false" v-if="!signup && signupButton">
            Sign up
          </button>
      </header>

      <div class="signup">
       <transition name="fade">
       <signup v-if="signup"></signup>
       </transition>
      </div>

       <footer class="modal-footer">
          <button class="actions special button primary" v-on:click="login = !login, signupButton = false" v-if="!login && loginButton">
            Login
          </button>
      </footer>

      <div class="login">
        <transition name="fade">
        <login v-if="login"></login>
        </transition>
      </div>

    </div>

  </div>

</template>

<style>

  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

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
    background: #B7E8EB;
    box-shadow: 1px 1px 200px 1px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    display: center;
    padding: 60px;
    z-index: -500;
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .modal-header {
    padding-bottom: 10px; 
  }

  .modal-footer {
    padding-top: 40px;
  }

  .close-modal-button {
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: none;
    background-image: url("../../public/assets/css/images/close.svg");
    background-position: 4.25em 1.2em;
    background-repeat: no-repeat;
    cursor: pointer;
    display: block;
    height: 3em;
    position: absolute;
    right: 0;
    top: 0;
    vertical-align: middle;
    width: 7em;
  }

  .close-modal-button:hover {
    background-color: rgba(0,0,0,0) !important;
    border-color: rgba(0,0,0,0) !important;
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