<template>
  <div class="header padding">
    <div class="container">
      <!-- logo -->
      <div class="logo">
        <img :src="imgUrl" />
        <span class="marginLeft8px">网易云音乐</span>
      </div>
      <!-- 翻页-->
      <div class="next-or-pre">
        <span class="iconfont left link"></span>
        <span class="iconfont right link marginLeft16px"></span>
      </div>
      <div>
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ components: {} })
export default class Header extends Vue {
  imgUrl: string = require("@/assets/wyy.png");
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 50px;
  line-height: 36px;
  background: #232323;
  z-index: 100;
  box-sizing: border-box;
  color: #fff;
  .container {
    display: flex;
    .logo {
      height: 28px;
      img {
        border-radius: 100%;
        height: 100%;
      }
    }
    .next-or-pre {
      margin-left: 100px;
      color: #fff;
    }
  }
}
</style>
