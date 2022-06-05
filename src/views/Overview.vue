<template>
<h2>
  Movies
</h2>
      <ul>
        <h3>The id is: {{id}}</h3>
        <h3>The title is {{title}}</h3>
    </ul>
</template>


<script>
import'../components/movies/Popular.vue'
export default {
    name: "Overview",
  props: {
    id:String,
    title: String,
  },
  } 
</script>