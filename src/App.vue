<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
        <header>
            <link rel="stylesheet" href="animate.min.css">
          <section id="sidebar">
            <div class="inner">
              <nav>
                <ul>                                   
                  <li><a href="/">Home</a></li>
                  <!-- <li><a href="/#/signup">Signup</a></li> -->
                  <!-- <li><a href="/#/login">Login</a></li> -->
                  <!-- <li><a href="/#/logout">Logout</a></li> -->
                  <!-- <li><a href="/#/template">Template</a></li> -->
                  <!-- <li><a href="/#/profile">Profile</a></li> -->
                </ul>

              </nav>
            </div>
          </section>
        </header>
        <div style="height:100px"></div>
        <router-view/>
          <footer style="height:100px" id="footer" class="wrapper style1-alt">
          <div class="inner">
            <ul class="menu">
              <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
           </div>
          </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
