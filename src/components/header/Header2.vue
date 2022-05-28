<template>
  <header class="hero-image">
    <div class="header-content">
      <!-- Implement previous and next arrows to display images -->
      <button>
        <img src="../../assets/imgs/play.jpg" width="35" alt="" srcset="" />Play
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header2",
    data() {
    return {
      movies: [],
    };
  },
  methods: {
    //loopoing through images in movies array
    getImages(){
      setTimeout(() => {
        return this.movies.map(movie => {
          return `'https://image.tmdb.org/t/p/w500' + ${movie.poster_path}`;
        });
      }, 1000);
    },
    mounted() {
    this.getImages();
  },
  },
  created() {
    let url ="https://api.themoviedb.org/3/movie/popular?api_key=18a017b1725a276ac9a9838ec5345147&language=en-US&page=1";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.movies = data.results;
        console.log(this.movies);
      });
  },
};
</script>

<style scoped>
header {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.2)),
    url("https://www.renderhub.com/renderhub/black-panther-movie-poster-3d-wallpaper/black-panther-movie-poster-3d-wallpaper_2560x1024.jpg");
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;
  margin-bottom: 20px;
  margin-top: 2px;
  justify-content: center;
  align-items: center;
}
.header-content a {
  padding: 12rem 0;
  font-size: 3rem;
  color: rgba(141, 140, 140, 0.829);
}
.header-content a:hover {
  text-decoration: none;
  color: #fffffff5;
  transform: scale(1.1);
  transition: 2s;
}

.previous {
  margin-left: 1.5rem;
  float: left;
}
.next {
  margin-right: 1.5rem;
  float: right;
}
.header-content button {
  background-color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  position: absolute;
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  top: 60%;
  left: 8%;
  box-shadow: 0px 0px 10px rgb(247, 247, 247);
}
.header-content button:hover {
  background: rgba(255, 255, 255, 0.918);
  color: black;
}
.header-content h1 {
  font-size: 2.2rem;
  color: rgb(255, 255, 255);
  position: absolute;
  font-weight: bold;
  width: 40%;
  top: 30%;
  left: 2rem;
  transition: all 0.3s ease-in-out;
}
.header-content p {
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  position: absolute;
  width: 40%;
  top: 40%;
  left: 2rem;
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 768px) {
  header {
    height: 60vh;
    width: 100%;
  }
  .header-content h1 {
    font-size: 1rem;
    top: 38%;
    left: 0%;
  }
  .header-content button {
    font-size: 0.3rem;
    top: 47%;
  }
  .header-content p {
    display: none;
  }
}
</style>