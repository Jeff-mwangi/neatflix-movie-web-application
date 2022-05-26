<template>
  <div class="footer">
    &copy;2022 | NeatFlix
    <span>
      | Designed by
      <a href="https://jeff-mwangi-portofolio.netlify.app"
        >Geoffrey Mwangi</a
      ></span
    >
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  bottom: 0;
  left: 0;
  margin-top: 3px;
  width: 100%;
  height: 60px;
  background: rgb(37, 4, 63);
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer span a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.footer span a:hover {
  color: rgb(255, 13, 13);
}
</style>