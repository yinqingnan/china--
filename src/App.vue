<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: { 
  }
}
</script>

<style>

@import url("http://at.alicdn.com/t/font_1437129_rpoab6bvhj.css");
*{
  margin  :0;
  padding:0;
}
li{
  list-style: none
}
h1,h2,h3,h4,h5,h6{
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
#blockbyte-bs-indicator{
  width:  0px !important
}
html, body {
width: 100%;
height: 100%;
margin: 0px;
padding: 0px;
}

</style>
