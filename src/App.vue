<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #15151B;
  color: #F1F1F1;
   a {
    text-decoration: none;
    -webkit-transition: all 0.6s;
    -moz-transition: all 0.6s;
    -o-transition: all 0.6s;
    transition: all 0.6s; 
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
  color: #2c3e50;
  h1 {
    font-size: 44px;
    font-weight: 900;
  }
}

// Neumorphism effects

.neu-dark {
  box-shadow: 4px 4px 12px #0f0f13;
  box-shadow: -4px -4px 12px #1b1b23;
}
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
.neu-red-inv {
  box-shadow: inset 4px 4px 12px #A24747, inset -4px -4px 12px #C46363;
}
.neu-red {
  box-shadow: 4px 4px 12px #A24747, -4px -4px 12px #C46363;
}



.right {
  float: right;
}
.left {
  float: left;
}
.container {
  max-width: 1600px;
  margin: 0 auto;
  overflow: hidden;
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