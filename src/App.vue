<template>
  <div id="app">

  <transition name="fade">
    <router-view/>
  </transition>


  </div>
</template>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: all .7s ease
}

.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
