<template>
  <header class="hero-image">
    <!-- <NavigationBar /> -->
    <div class="header-content">
      <!-- Implement previous and next arrows to display images -->
      <a href="#" class="previous">&lt;</a>
      <a href="#" class="next">&gt;</a>
      <!-- <half-circle-spinner id="loading"
      style="top:14rem"
        :animation-duration="1000"
        :size="40"
        color="#ff1d5e"
      /> -->
      <div class="play">
      <button>
         <v-lazy-image src="../../assets/imgs/play.jpg" width="35" alt="" srcset="" />Play
      </button>
      </div>
      <div class="more-info"><button>More Info</button></div>
    </div>
  </header>
</template>

<script>
 import VLazyImage from "v-lazy-image";
// import NavigationBar from '../Nav/NavigationBar.vue'
  import { HalfCircleSpinner } from 'epic-spinners'
export default {
  name: "Header",
  components: {
    HalfCircleSpinner,
    // NavigationBar,
     VLazyImage,
    },
  methods: {
    heroImages() {
      if (screen.width <= 778) {
        var images = [
          "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1301789770l/10140661.jpg",
          "https://image.tmdb.org/t/p/w500/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
          "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
          "https://image.tmdb.org/t/p/w500/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg",
          "https://image.tmdb.org/t/p/w500/bMUhBeMp0vLQzaPBX0izFdnFvh0.jpg",
          "https://image.tmdb.org/t/p/w500/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
          "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
          "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
          "https://image.tmdb.org/t/p/w500/pDc2HxQtC0MlKD4QfRvmKREEyhc.jpg",
          "https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
          "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        ];
      } else {
        // add images in an array and loop through them to display them in the header image section
        var images = [
          "https://ralingo.com/wp-content/uploads/2022/03/maxresdefault-1.jpg",
          "https://www.vitalthrills.com/wp-content/uploads/2022/02/morbius.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61JE2Z-XapL._RI_.jpg",
          "https://netflixjunkie.com/wp-content/uploads/2022/04/AAAABXq_vQJf0hxGmUQqHnb8nXwpz8iEmzC2upISv1MYxfE2kXO-IouDyL-TuAAkSqEn-iPui5s3ax8In2XqquIQkQ7L7csL.jpg",
          "https://cdn.wallpapersafari.com/76/85/fFsbXB.jpg",
          "https://www.teahub.io/photos/full/67-670663_hollywood-movie-poster-hd.jpg",
          "https://wallpapercave.com/wp/jCDL6OV.jpg",
          "https://www.mmppicture.co.in/wp-content/uploads/2022/03/The-Kashmir-Files-Poster-1-1080x608.jpg",
          "https://wallpaperbat.com/img/227405-avengers-endgame-2019-poster-wallpaper-avengers-movie-posters.jpg",
          "https://filmspell.com/wp-content/uploads/2019/10/Joker2019-Movie-HD-Poster-FilmSpell_1-990x556.jpg",
          "https://www.michigansportszone.com/wp-content/uploads/2021/08/83422625.jpg",
          "https://wallpapercave.com/uwp/uwp170129.png",
          "https://www.renderhub.com/renderhub/black-panther-movie-poster-3d-wallpaper/black-panther-movie-poster-3d-wallpaper_2560x1024.jpg",
        ];
      }
      let previous = document.querySelector(".previous");
      let next = document.querySelector(".next");
      let i = 0;
      let hero = document.querySelector(".hero-image");
      setInterval(() => {
        hero.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url(${images[i]})`;
        i++;
        if (i >= images.length) {
          i = 0;
        }
      }, 6000);
      previous.addEventListener("click", () => {
        i--;
        if (i > 0) {
          i = images.length - 1;
        }
        hero.style.backgroundImage = `linear-gradient(to right,rgba(0, 0, 0, 0.2)),url(${images[i]})`;
      });
      next.addEventListener("click", () => {
        i++;
        if (i >= images.length) {
          i = 0;
        }
        hero.style.backgroundImage = `linear-gradient(to right,rgba(0, 0, 0, 0.7)),url(${images[i]})`;
      });
    },
  },
  mounted() {
    this.heroImages();
  },
};
</script>

<style scoped>
header {
  background-image: linear-gradient(to right,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5)),url("https://www.okchicas.com/wp-content/uploads/2022/05/Netflix-revela-primeras-imagenes-de-First-Kill-la-nueva-serie-de-vampiros.jpg");
  background-size: 100% 100%;
  aspect-ratio: auto;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
}
.header-content a {
  padding: 17rem 0;
  font-size: 3rem;
  color: rgba(141, 140, 140, 0.829);
}
.header-content a:hover {
  text-decoration: none;
  color: #fffffff5;
  transform: scale(1.1);
  transition: 2s;
}

.previous {
  margin-left: 1.5rem;
  float: left;
}
.next {
  margin-right: 1.5rem;
  float: right;
}
.header-content button {
  background-color: #ffffff81;
  border: none;
  border-radius: 3px;
  position: absolute;
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  top: 60%;
  left: 8%;
  box-shadow: 0px 0px 10px rgba(247, 247, 247, 0.377);
}
.play button{
  padding: 3px 25px;
}
.more-info button{
  padding: 6px 50px;
  top: 60%;
  left: 18%;


}
.half-circle-spinner .circle[data-v-bf5bf2dc]{
  top:13rem;
}
#loading {
left: 45%;
  }
.header-content button:hover {
  background: rgba(255, 255, 255, 0.616);
  color: black;
  transition: all 0.3s ease-in-out;
  transform: scale(1.07);
}
.header-content h1 {
  font-size: 2.2rem;
  color: rgb(255, 255, 255);
  position: absolute;
  font-weight: bold;
  width: 40%;
  top: 30%;
  left: 2rem;
  transition: all 0.3s ease-in-out;
}
.header-content p {
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  position: absolute;
  width: 40%;
  top: 40%;
  left: 2rem;
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: 1195px) {
  .more-info button {
    padding: 7.5px 12px;
    top: 60%;
    left: 23%;
    font-size: 1.2rem;
  }
@media screen and (max-width: 794px) {
  header {
    background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url("https://image.tmdb.org/t/p/w500/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg");
    height: 70vh;
    width: 100%;
  }
  .header-content h1 {
    font-size: 1rem;
    top: 38%;
    left: 0%;
  }
  .header-content button {
    font-size: 0.8rem;
    padding: 1px 10px;
    top: 60%;
  }
  .play img{
    width: 25px;

  }
  .more-info button {
    padding: 3.5px 10px;
    top: 60%;
    left: 33%;
    font-size: 0.8rem;
  }
  .header-content p {
    display: none;
  }
  .previous,
  .next {
    display: none;
  }
}
}
</style>