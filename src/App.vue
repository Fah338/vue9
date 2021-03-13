
   <template>
  <div id="app">
    <b-navbar id="nav" toggleable="lg" type="dark">
      <b-navbar-brand to="/">
      <h2> Oni Ramen</h2></b-navbar-brand>
  

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/reservation" >Reservation</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view 
    />
  </div>
</template>
<script>
export default {
  mounted(){
    this.$router.replace("/reservation");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(131, 171, 207);
}

#nav {
  padding: 30px;
  background: #000;
}

#nav a {
  font-weight: bold;
  color: #6e7f8f;
}

#nav a.router-link-exact-active {
  color: #1784e9;
}
</style>