<template>
<!-- <Header /> -->
<Header />
<div class="container-fluid">
  <Trending />
  <Popular />
  <TopRated />
  <TvShows />
  <NowPlaying />
  <UpComing />
</div>
  <Footer />
</template>

<script setup>
import Movie from "../components/movies/Popular.vue"
import Footer from "../components/footer/Footer.vue"
import TopRated from "../components/movies/TopRated.vue"
import TvShows from "../components/movies/TvShows.vue"
import NowPlaying from "../components/movies/NowPlaying.vue"
import UpComing from "../components/movies/UpComing.vue"
import Popular from "../components/movies/Popular.vue"
import Header from "../components/Nav/Header.vue"
import Header2 from "../components/header/Header2.vue"
import Trending from "../components/movies/Trending.vue";

const props = defineProps({
  title: {
    type: String,
    default: "NeatFlix",
  },
})
</script>

<style scoped>
.container-fluid {
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.container h1{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2em;
  margin: 0.67em 0;
  font-weight: bold;
}
</style>