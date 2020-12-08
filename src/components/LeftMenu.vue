<template>
  <div class="left-menu padding">我是左边菜单</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({ components: {} })
export default class LeftMenu extends Vue {}
</script>

<style lang="scss" scoped>
.left-menu {
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 50px;
  background: #555;
  width: 200px;
  z-index: 99;
  box-sizing: border-box;
}
</style>
