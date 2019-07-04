<template width="100%">
  <div class="block">
    <el-carousel height="100%">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.block {
  width: 100%;
  height: 100%;
}
.el-carousel--horizontal {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #09ec4d;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #02a5f0;
}
.el-main {
  padding: 0;
}
</style>