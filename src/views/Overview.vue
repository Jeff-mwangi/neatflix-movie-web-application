<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="image">
      <v-lazy-image :src="'https://image.tmdb.org/t/p/w500' + backdrop_path" :alt="title" />
      </div>
      <div class="buttons">
      <button class="btn btn-danger">Play</button>
      <button class="btn btn-primary">+ My Playlist</button>
      </div>
      </div>
      <div class="col-md-6">
        <div class="details">
      <h2>{{title}}</h2>
      <p>{{overview}}</p>
      <p>{{release_date}}</p>
      <p>{{vote_average}}</p>
      <p>{{vote_count}}</p>
      <p>{{popularity}}</p>
      </div>
  </div>
  </div>
</div>

<!-- Results from a Search input -->
<h3>Tv Shows</h3>
  <div class="grid-x scroll-inline">
    <div class="g-card" v-for="movie in movies" :key="movie.id">
    <router-link 
    :to="{ 
      name: 'Overview',
      params: movie,
      query: { 
      id: movie.id,
      title: movie.title,
      backdrop_path: movie.poster_path,
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
import'../components/movies/Popular.vue'
export default {
    name: "Overview",
  props: ['movies'],
  components: {
    VLazyImage,
  },
  }
</script>

<style scoped>
.container{
  padding-top: 100px;
}

h2{
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
}
  .buttons{
    padding: 10px 100px 20px;
    display: flex;
    gap:1rem;
  }
  .details{
    padding: 50px 0px 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 772px) {
    .container{
      align-items: center;
    }
    img{
      padding-left: auto;
      width: 300px;
      height: 300px;
    }
    .details{
      padding: 50px 20px 50px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }


</style>