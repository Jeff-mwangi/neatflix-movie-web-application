<template >
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
  <input
  type="search"
  name="search" 
  id="search" 
  placeholder="Search Movies"
  v-model ="query"
  @keypress="searchMovie"
  >
  <span class="login">
    <button
    class="btn btn-danger" 
    type="submit"
    @click="login()"
    >
    Login
    </button>
  </span>
  </div>
</div>
<span class="menu" @click="openNav()">&#9776;</span>
</div>
</nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data(){
    return {
    query : '',
    api_key :'18a017b1725a276ac9a9838ec5345147',
    base_url : 'https://api.themoviedb.org/3/search/',
    movies: [],
    }
},
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0px";
    },
    searchMovie(e){
      if(e.key === 'Enter'){
        fetch(`${this.base_url}movie?api_key=${this.api_key}&query=${this.query}`)
        .then((response) => response.json())
        .then((data) => {
        this.movies = data.results;
        console.log(this.movies);
        this.movies.forEach(movie => {
        this.$router.push({
      name:'Overview',
      params: movie,
      query: { 
        id: movie.id,
        title: movie.title,
        backdrop_path: movie.backdrop_path,
        overview: movie.overview,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        popularity: movie.popularity,
      },
       })
        })
       });
          
        }
    },
    login(){
      this.$router.push({
        name:'Login',
      })

    },
    display(){
      document.getElementById("dropdown-content").classList.toggle("show");
    }
  }
}

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
nav {
  position: absolute;
  position: fixed;
  width: 100%;
  height: 8%;
  background-color: rgba(32, 5, 54, 0.726);
  padding-top: 2px;
}
.sidenav{
  height: auto;
  width:auto;
  margin-left:0px;
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
  color: #afafaf;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #ffffff;
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
   background: white url("../../assets/imgs/search.svg") no-repeat 15px center;
  background-size: 15px 15px;
  border-radius: 0px 10px 0px 10px;
  text-align: center;
  width: 350px;
  border:none;
  font-size: 1.2rem;
  height: 38px;
  right: 0;
  padding-right:0;
  margin-left:5rem;
  transition:0.4s;
}
.sidenav input:active {
  border:none;
  color: #ebebeb;
  transition: color 0.5s linear 0s;
}
input:hover,
input:focus {
  outline: none;
  border-radius: 10px 0px 10px 0px;
  background-color:#ebebeb;
  transition: 0.4s;
  box-shadow: 0px 0px 10px rgb(247, 247, 247);
}
::placeholder{
 color:#000000;
}
.login{
  margin-left: 2rem;
}
.login button{
  border-radius: 10px;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;
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
  background-color: rgb(19, 3, 32);
  margin-left: -18px;
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
  width:90%;
  margin-left:0.5rem;
  }
}

</style>