<template>
    <header>
      <div class="header-content">
        <h1>BLACK PANTHER</h1>
        <p>
         Laura and Massimo are back and hotter than ever. But the reunited couple's new beginning is complicated by Massimo’s family ties and a mysterious man who enters Laura’s life to win her heart and trust, at any cost.
        </p>
        <button>Watch Now</button>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>

header{
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://images.indianexpress.com/2021/07/black-panther-wakanda-forever-1200.jpg);
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
  background:linear-gradient(to right, #00f13cec,rgb(rgb(230, 4, 4)));
  border: 1px solid rgb(255, 255, 255);
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  color: rgb(77, 9, 133);
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
    height:50vh;
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