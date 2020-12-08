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
      <div class="keyword-wrap">
        <el-input
          prefix-icon="iconfont search"
          v-model="keyword"
          placeholder="搜索"
          size="mini"
          :class="onFocus ? 'focus' : 'el-input'"
          @focus="changeSize"
          @blur="changeSize"
        ></el-input>
        <span class="link iconfont maikefeng" title="听歌识曲"></span>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ components: {} })
export default class Header extends Vue {
  imgUrl: string = require("@/assets/wyy.png");
  keyword = "";
  onFocus = false;
  changeSize() {
    this.onFocus = !this.onFocus;
  }
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
    grid-template-columns: 200px 50px 300px 1fr; /*定义多少列，多宽*/
    display: grid;
    column-gap: 8px; /*列的间距*/
    .logo {
      height: 28px;
      img {
        border-radius: 100%;
        height: 100%;
      }
    }
    .next-or-pre {
      color: #fff;
    }
    .keyword-wrap {
      .el-input {
        width: 80px !important;
        transition: all 0.5s ease 0s !important;
      }
      .focus {
        width: 240px !important;
        transition: all 0.5s ease 0s !important;
      }
      .maikefeng {
        display: inline-block;
        margin-left: 8px;
        width: 36px;
        text-align: center;
        border-radius: 100%;
        font-size: 18px;
        background: #565656;
      }
    }
  }
}
</style>
