<template>
  <div class="grid-x scroll-inline">
    <div class="g-card" v-for="movie in movies" :key="movie.id">
      <img
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
  name: "Trending",
  components: {
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
    let url ="https://api.themoviedb.org/3/trending/all/day?api_key=18a017b1725a276ac9a9838ec5345147&language=en-US&page=1";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.movies = data.results;
        console.log(this.movies);
      });
  },
  methods: {
    showMovies(id) {
      this.$router.push({ name: "overview", params: { id: id } });
    },
  },
};
</script>

<style scoped>
.imgx {
  margin-top: 0px;
}
</style>
