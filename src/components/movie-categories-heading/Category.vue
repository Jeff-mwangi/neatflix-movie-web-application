<template>
  <div class="category">
    <h2>{{title}}</h2>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.category{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 4px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
  color: rgb(161, 160, 160);
  border-radius: 5px;
}
.line{
  width: 80%;
  height: 1px;
  bottom:8px;
  background-color: rgb(228, 19, 47);
  margin-top: -4px;
  margin-bottom: 10px;
}
</style>