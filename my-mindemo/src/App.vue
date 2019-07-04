<template>
  <div>
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Carousel,
  CarouselItem,
  Col,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup
} from "element-ui";
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
export default {
  name: "app",
  comments: {}
};
</script>

<style type="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
