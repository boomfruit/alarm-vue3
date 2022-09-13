<template>
  <div class="window-title">
    <!-- 软件logo预留位置 -->
    <div style="-webkit-app-region: drag" class="logo">
      <svg width="2em" height="2em" viewBox="0 0 1024 1024">
        <path
          fill="#68bae8"
          d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
        ></path>
      </svg>
      <span class="tab-title ml"> 主页面</span>
    </div>
    <!-- 菜单栏位置 -->
    <div></div>
    <!-- 中间标题位置 -->
    <div style="-webkit-app-region: drag" class="title"></div>
    <div class="controls-container">
      <div class="windows-icon-bg">
        <span class="tab-title">主页面</span>
      </div>
      <div class="windows-icon-bg">
        <span class="tab-title">报警记录</span>
      </div>
      <div class="windows-icon-bg">
        <span class="tab-title">系统设置</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style rel="stylesheet/scss" lang="scss" scoped>
.window-title {
  width: 100%;
  height: 70px;
  line-height: 70px;
  // background-color: #333;
  display: flex;
  -webkit-app-region: drag;
  position: fixed;
  top: 70px;
  z-index: 99999;
  .icon-logo {
    width: 162px;
    height: 70px;
    object-fit: fill;
    // vertical-align: -0.15em;
    // fill: currentColor;
    // overflow: hidden;
  }
  .title {
    padding-left: 50px;
    font-size: 38px;
    line-height: 70px;
    letter-spacing: 3px;
    width: 100%;
    text-align: center;
    color: #6cc4f1;
  }
  .logo {
    width: 300px;
    margin-left: 60px;
    line-height: 70px;
    display: flex;
    align-items: center;
  }
  .controls-container {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    text-align: center;
    position: relative;
    z-index: 3000;
    -webkit-app-region: no-drag;
    height: 100%;
    width: 500px;
    margin-left: auto;
    .windows-icon-bg {
      display: inline-block;
      -webkit-app-region: no-drag;
      height: 100%;
      width: 28%;
      color: rgba(129, 129, 129, 0.6);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon-size {
        width: 12px;
        height: 15px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .windows-icon-bg:hover {
      background-color: rgba(182, 182, 182, 0.2);
      color: #333;
    }
    .close-icon:hover {
      background-color: rgba(232, 17, 35, 0.9);
      color: #fff;
    }
  }
}
.tab-title {
  font-size: 28px;
  color: #fff;
}
</style>
