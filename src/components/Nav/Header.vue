<template>
    <header>
      <img
        src="https://republicmonews.com/wp-content/uploads/2022/04/365-day.jpeg"
        alt=""
        srcset=""
      />
      <div class="header-content">
        <button>Watch Now</button>
        <p>
         Laura and Massimo are back and hotter than ever. But the reunited couple's new beginning is complicated by Massimo’s family ties and a mysterious man who enters Laura’s life to win her heart and trust, at any cost.
        </p>
      </div>
    </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-content button{
  background: rgb(255, 255, 255);
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
  left: 80%;
  box-shadow: 0px 0px 10px rgb(247, 247, 247);
}
.header-content button:hover{
  background: rgb(77, 9, 133);
  color: rgb(255, 255, 255);
}
.header-content p{
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  font-weight: bold;
  position: absolute;
  width:26rem;
  top: 60%;
  right: 67%;
  transition: all 0.3s ease-in-out;
}
header img {
  width: 100%;
  height: 75vh;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

}
@media screen and (max-width: 768px) {
  header img {
    height: 35vh;
    width: 100%;
  }
  .header-content h1{
    font-size: 2rem;
    top: 20%;
    left: 70%;
  }
  .header-content button{
    font-size: 0.3rem;
    top: 30%;
    left: 70%;
  }
  .header-content p{
display: none;
  }
}
</style>