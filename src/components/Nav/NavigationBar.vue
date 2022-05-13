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