<template>
<h2>
  Movies
</h2>
      <ul>
        Stupid
      <li v-for="(movie, id) in movies" :key="id">
        <h3>{{movie.title}}</h3>
      </li>
    </ul>

<H3>Oh Men, Its not rendering</H3>
</template>


<script>
import'../components/movies/Popular.vue'
import Popular from '../components/movies/Popular.vue';
export default {
    name: "Overview",
    components: { Popular }
};
</script>