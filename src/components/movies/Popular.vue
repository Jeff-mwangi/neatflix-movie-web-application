<template>
  <h3>Popular</h3>
  <div class="grid-x scroll-inline">
    <div class="g-card" v-for="movie in movies" :key="movie.id">
     <router-link 
    :to="{ 
     name: 'Overview',
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
     }">
      <v-lazy-image
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        :alt="movie.title"
        class="imgx"
      />
    </router-link>
    </div>
  </div>
  
</template>

<script>
import VLazyImage from "v-lazy-image";
import Modal from "../Modal.vue";
import Category from "../movie-categories-heading/Category.vue";

export default {
  name: "Popular",
  components: {
    VLazyImage,
    Modal,
    Category
},

  data() {
    return {
      movies: [],
      showModal: true,
    };
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
  methods: {
    showMovies(id) {
      this.$router.push({ name: "Overview", params: { id: movie.id } });
    },
  },
};
</script>