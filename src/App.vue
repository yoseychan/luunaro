<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import './assets/styles/base';

body {
  margin: 0;
  padding: 0;
  background: $dark;
  color: $txt-ondark-default;
  a {
    text-decoration: none;
    outline: none;
  }
  button {
    -webkit-transition: all 0.6s;
    -moz-transition: all 0.6s;
    -o-transition: all 0.6s;
    transition: all 0.6s; 
  }
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $txt-onlight-default;

  h1 {
    font-size: 44px;
    font-weight: 900;
  }

  a {
    // Transition
    -webkit-transition: all 0.26s 0s ease-in-out;
    -moz-transition: all 0.26s 0s ease-in-out;
    -o-transition: all 0.26s 0s ease-in-out;
    transition: all 0.26s 0s ease-in-out;
  }
}

// Neumorphism effects

.neu-darker{
  box-shadow: 4px 4px 12px #0A0A0D, -4px -4px 15px #21212E;
  
}
.neu-dark-inv {
  box-shadow: inset 4px 4px 12px #0A0A0D, inset -4px -4px 12px #21212E;
}
.neu-light {
  box-shadow: 4px 4px 12px #b3b3b3, -4px -4px 12px #ffffff;
}
.neu-light-inv {
  box-shadow: inset 4px 4px 12px #b3b3b3, inset -4px -4px 12px #ffffff;
}


</style>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>