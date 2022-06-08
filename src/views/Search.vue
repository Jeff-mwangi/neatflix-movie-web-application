<template>
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
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        :alt="movie.title"
        class="imgx"
      />
    </router-link>
    </div>
  </div>
  
</template>

<script>

export default {
  name: "Search",
  data() {
    return {
      movies: [],
    };
  },
  created() {
    let url ="https://api.themoviedb.org/3/search/movie?api_key=18a017b1725a276ac9a9838ec5345147&query=money";
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
.imgx {
  margin-top: 0px;
}
</style>
