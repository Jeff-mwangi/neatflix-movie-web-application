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
  <input type="search" name="search" id="search" placeholder="Search Movies">
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
  height: 0%;
  background-color: rgb(63, 4, 110);
  padding-top: 4px;
  padding-bottom: 4px;
}
.sidenav{
  height: 2.5rem;
  display: flex;
  width:auto;
}
.sidenav a{
  position: inherit;
  top: 0;
  padding-left: 2.5rem;
  overflow-x: hidden;
  transition: 0.5s;
  font-weight: bold;
  padding: 1rem 1rem 3rem 1rem;
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
  background:linear-gradient(to right,rgb(145, 66, 66) 48%,rgb(93, 93, 160));
  border-radius: 10px;
  text-align: center;
  height: 38px;
  border:none;
  right: 0;
  padding-right:0;
  margin-left:5rem;
 
}
.sidenav input:active {
  color: #ebebeb;
  transition: color 0.5s linear 0s;
}
input:hover,
input:focus {
  background:linear-gradient(to right,rgb(145, 66, 66) 48%,rgb(93, 93, 160));
  transition: active;
}
::placeholder{
 color:#ffffff;
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
  color: #9b9b9b;
  cursor: pointer;
}
.sidenav input{
  width:10rem;
  margin-left:40px;
  }
}
</style>