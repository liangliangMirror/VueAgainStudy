<template>
  <el-col :span="12">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item v-for="(value,key) in music" :key="key">
        <i class="el-icon-menu"></i>
        <span slot="title" v-text="value"></span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    selected: {
      type: String
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data() {
    return {
      music: {
        BadDay: "BadDay",
        Broken: "Broken",
        FavoriteGirl: "FavoriteGirl",
        ColdWater: "Cold Water"
      },
      active: "1"
    };
  }
  //   created() {
  //     console.log(this.selected);
  //   }
});
</script>

<style scoped>
.el-menu {
  background: none;
}
.el-col-12 {
  width: 100%;
}
.el-menu-item {
  line-height: 100px;
  height: 100px;
  text-align: left;
}
.el-menu[data-v-5c9bd510] {
  /* padding-left: 20px; */
}
</style>


