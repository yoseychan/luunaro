<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <router-link class="logo" to="/">Luunaro</router-link>
        <div class="right">
          <router-link to="/neumorphism">Neumorphism</router-link> |
          <router-link to="/example">Examples</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #15151B;
  color: #F1F1F1;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1 {
    font-size: 44px;
    color: #F5F2F2;
    font-weight: 900;
  }
  h2 {
    font-size: 34px;
    color: #F1F1F1;
  }
  h3 {
    font-size: 24px;
    color: #F1F1F1;
  }
  h4 {
    font-size: 18px;
    color: #ADADAD;
  }
  h5 {
    font-size: 12px;
    color: #979797;
  }
  h6 {
    font-size: 10px;
    color: #6B6B6B;
    text-transform: uppercase;
  }
  p{
    font-size: 16px;
    color: #C4C4C4;
  }
}

#nav {
  // padding: 20px;
  .container {
    max-width: 1600px;
    margin: 0 auto;
    overflow: hidden;
  }
  .logo {
    float: left;
    font-family: 'Courier New', Courier, monospace;
    font-size: 44px;
    font-weight: 900;
    padding :0;
    color: #c43282;

  }
  .right {
    float: right;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding:15px;

    &.router-link-exact-active {
      color: #c43282;
    }
  }
}
</style>
