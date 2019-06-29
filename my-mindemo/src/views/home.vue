<template>
  <div>
    <heades/>
    <div>{{$store.state.id}}</div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import heades from "../components/heder.vue";
import { mapActions, mapState, mapGetters } from "vuex";
export default Vue.extend({
  data() {
    return {};
  },
  components: {
    heades
  },
  mounted() {
    console.log(this.$store.state.id);
    console.log(this.$store.commit("SAVE_ID", 10));
    console.log(this.$store.getters.add);
    console.log(this.$store.dispatch("jiajia", 100));
  },
  updated() {
    console.log(this.$store.state.id);
  }
});
</script>
