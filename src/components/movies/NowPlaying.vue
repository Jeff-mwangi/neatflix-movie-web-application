<template>
 <Category title="Now Playing"/>
  <div class="grid-x scroll-inline">
    <div class="g-card" v-for="movie in movies" :key="movie.id">
      <img
        @click="showModal=true" loading="lazy"
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        :alt="movie.title"
        class="imgx"
      />
    </div>
  </div>

</template>

<script>
import Modal from "../Modal.vue";
import Category from "../movie-categories-heading/Category.vue";

export default {
  name: "NowPlaying",
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
    let url ="https://api.themoviedb.org/3/movie/now_playing?api_key=18a017b1725a276ac9a9838ec5345147&language=en-US&page=1";
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