<template>
  <div class="showOverview">
    <div class="container">
      <h2>Movies</h2>
      <h4>title = {{movie.title}}</h4>

     <img
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        :alt="movie.title"
        class="imgx"
      />
          </div>
  </div>
</template>

<script>
export default {
  name: "Overview",
};
</script>