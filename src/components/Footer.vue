<template>
  <div class="footer padding">我是底部</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ components: {} })
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 50px;
  line-height: 50px;
  background: #232323;
  z-index: 100;
  box-sizing: border-box;
}
</style>
