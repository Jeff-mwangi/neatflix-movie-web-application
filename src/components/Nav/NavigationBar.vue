<template>
<nav class="navbar navbar-expand-md navbar-dark sticky-top">
    <div class="container-fluid">
<a class="navbar-brand" href="#">
        <img
          src="../../assets/neatflix.svg"
          alt="The Movie DB"
          width="120"
          height="40"
        />
      </a>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <div class="items">
  <a href="#">Home</a>
  <a href="#">Genre</a>
  <a href="#">Movies</a>
  <a href="#">Series</a>
  <a href="#">Contact</a>
  <input type="search" name="search" id="search" placeholder="Search">
  </div>
</div>
<span class="menu" @click="openNav()">&#9776</span>
</div>

</nav>


</template>

<script>
export default {
  name: "NavigationBar",
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0px";
    },
  },
};
</script>

<style scoped>
nav {
  background-color: rgb(63, 4, 110)
}
.sidenav{
  height: 2rem;
  display: inline-block;
  width:auto;
}
.sidenav a{
  position: inherit;
  top: 0;
  padding-left: 2.5rem;
  overflow-x: hidden;
  transition: 0.5s;
  font-weight: bold;
  padding: 2rem 1rem 1rem 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  color: #ffffff;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f52e2e;
}
.closebtn{
  display: none;
}
.menu{
  display:none;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.sidenav input{
  background:#3b3b3b;
  border-radius: 10px;
  text-align: center;
  height: 35px;
  border:none;
  right: 0;
  padding-right:0;
  margin-left:5rem;
}

@media screen and (max-height: 770px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
@media screen and (max-width: 977px) {
.sidenav {
  background-color: rgb(48, 16, 73);
  height: 100%;
  width: 0%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  justify-content: space-between;
}

.sidenav a {
  font-weight: bold;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 1.5rem;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.menu {
  display: block;
  font-size: 2rem;
  color: #818181;
  cursor: pointer;
}
.sidenav input{
  width:10rem;
  margin:0;
  }
}
</style>


<!-- <template>
  <nav class="navbar navbar-expand-md navbar-dark sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../../assets/neatflix.svg"
          alt="The Movie DB"
          width="120"
          height="40"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
         <li class="nav-item">
            <router-link class="nav-link" to="/">Genre</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Movies</router-link>
            </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Series</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Contact</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <form class="d-flex form-inline my-2 my-lg-0 ml-auto">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <button class="btn-hover" type="submit">SIGN UP</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
*{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #fff;
}
.nav-link {
  cursor: pointer;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
nav {
  background-color: rgb(83, 13, 139);
  padding: 0;
  margin: 0;
}
nav ul {
  padding-left: 10%;
}
ul form {
  justify-content: flex-end;
}
ul form input{
  height:2rem;
  background: rgba(58, 56, 56, 0.89);
  border:none;
}
ul button{
  border: none;
  border-radius:5px;
  background: transparent;
  position: relative;
}
.button-hover::before {
  z-index: 1;
  content: "";
  position: absolute;
  top:0;
  left:0;
  width: 50%;
  height: 100%;
  background-color:rgba(74, 202, 35, 0.836);
  transition:0.3s, ease-in-out;
}

</style> -->
