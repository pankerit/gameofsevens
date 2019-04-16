<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./sass/vars.scss";
@import "./sass/reset.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("/bg.jpg");
  background-size: cover; 
  background-position: right top;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: absolute;
}

</style>
