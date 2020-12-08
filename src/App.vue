<template>
  <div id="app">
    <Hearder />
    <LeftMenu />
    <div class="container padding">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hearder from "@/components/Header.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import Footer from "@/components/Footer.vue";
@Component({ components: { Hearder, Footer, LeftMenu } })
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  position: fixed;
  top: 50px;
  left: 200px;
  bottom: 50px;
  right: 0;
  box-sizing: border-box;
}
</style>
