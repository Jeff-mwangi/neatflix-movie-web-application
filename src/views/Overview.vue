<template>
<h2>
  Movies
</h2>
      <ul>
        <h3>The title is {{title}}</h3>
       <img :src="'https://image.tmdb.org/t/p/w500' + backdrop_path" :alt="title" />
        <h3>The overview is {{overview}}</h3>
        <h3>The release_date is {{release_date}}</h3>
        <h3>The vote_average is {{vote_average}}</h3>
        <h3>The vote_count is {{vote_count}}</h3>
        <h3>The popularity is {{popularity}}</h3>

    </ul>
</template>


<script>
import'../components/movies/Popular.vue'
export default {
    name: "Overview",
  props: {
    title: String,
    backdrop_path: String,
    overview: String,
    release_date: String,
    vote_average: String,
    vote_count: String,
    popularity: String,
  },
  }
</script>