<template>
<h3>Upcoming</h3>
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
      <img
        @click="showModal=true" loading="lazy"
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        :alt="movie.title"
        class="imgx"
      />
    </router-link>
    </div>
  </div>

</template>

<script>
import Modal from "../Modal.vue";
import Category from "../movie-categories-heading/Category.vue";

export default {
  name: "UpComing",
  components: {
    Modal,
    Category
},
  data() {
    return {
      movies: [],
      showModal: false,
    };
  },
  created() {
    let url ="https://api.themoviedb.org/3/movie/upcoming?api_key=18a017b1725a276ac9a9838ec5345147&language=en-US&page=1";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.movies = data.results;
        console.log(this.movies);
      });
  },
  methods: {
    overview() {
      this.$router.push({ name: "overview", params: { id: this.movie.id } });
    },
  },
};
</script>