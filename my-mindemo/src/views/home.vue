<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <xx />
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<script lang="ts">
import Vue from "vue";
// import heades from "../components/heder.vue";
import xx from "../components/xx.vue";
import xxx from "../components/xxx.vue";
export default Vue.extend({
  data() {
    return {
      active: false
    };
  },
  components: {
    // heades,
    xx,
    xxx
  },
  mounted() {
    // console.log(this.$store.state.id);
    // console.log(this.$store.commit("SAVE_ID", 10));
    // console.log(this.$store.getters.add);
    // console.log(this.$store.dispatch("jiajia", 100));
  },
  updated() {
    // console.log(this.$store.state.id);
  },
  methods: {
    goto() {
      // this.$router.push(name);
      this.$router.replace({ name: "xxx" });
    }
  },
  created() {}
});
</script>
