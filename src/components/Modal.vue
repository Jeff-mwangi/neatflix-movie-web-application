<template>
<div class="modal-overlay">
  <h3>Hide</h3>
<div class="moda">
  <div class="modal-container">
    <div class="modal-header">
        <h3>Model View</h3>
        <span class="modal_close">&times;</span>
    </div>
    <div class="modal-body">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea pariatur alias. Quos eius nostrum, totam maiores minima eligendi nihil perferendis non debitis blanditiis est impedit, minus architecto. Debitis, nisi?</p>
    </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-overlay > .moda{
  position: fixed;
  align-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
}
.modal-container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
}
.modal-header{
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
.modal-header h3{
  margin: 0;
  font-weight: normal;
}
.modal_close{
  cursor: pointer;
  font-weight: bold;
  color: rgb(252, 7, 7);
}
</style>