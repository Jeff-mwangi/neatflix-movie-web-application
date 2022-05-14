<template>
    <header class="hero-image">
      <div class="header-content">
        <!-- <h1>BLACK PANTHER</h1> -->
        <!-- <p>
         Laura and Massimo are back and hotter than ever. But the reunited couple's new beginning is complicated by Massimo’s family ties and a mysterious man who enters Laura’s life to win her heart and trust, at any cost.
        </p> -->
        <button>Watch Now</button>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header",
  methods:{
    heroImages(){
    // add images in an array and loop through them to display them in the header image section
    let images = [
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
    let i = 0;
    let hero = document.querySelector(".hero-image");
    let heroImages = setInterval(() => {
      hero.style.backgroundImage =  `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),url(${images[i]})`;
      hero.style.transition = "1s ease";
      i++;
      if (i >= images.length) {
        i = 0;
      }
    }, 6000);
    },
  },
  mounted(){
    this.heroImages();
  },
};
</script>

<style scoped>

header{
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("https://www.renderhub.com/renderhub/black-panther-movie-poster-3d-wallpaper/black-panther-movie-poster-3d-wallpaper_2560x1024.jpg");
  background-size:cover;
  background-position: center;
  background-repeat:no-repeat;
  width: 100%;
  height: 80vh;
  margin-bottom: 20px;
  margin-top: 2px;
  justify-content: center;
  align-items: center;


}
.header-content button{
  background-color: #f52e2e;
  border:none;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  top: 60%;
  left: 8%;
  box-shadow: 0px 0px 10px rgb(247, 247, 247);
}
.header-content button:hover{
  background: rgb(77, 9, 133);
  color: rgb(255, 255, 255);
}
.header-content h1{
  font-size: 2.2rem;
  color: rgb(255, 255, 255);
  position: absolute;
  font-weight: bold;
  width:40%;
  top: 30%;
  left:2rem;
  transition: all 0.3s ease-in-out;
}
.header-content p{
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  position: absolute;
  width:40%;
  top: 40%;
  left:2rem;
  transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 768px) {
  header{
    height:60vh;
    width: 100%;
  }
  .header-content h1{
    font-size: 1rem;
    top: 38%;
    left: 0%;
  }
  .header-content button{
    font-size: 0.3rem;
    top: 42%;
  }
  .header-content p{
display: none;
  }
}
</style>