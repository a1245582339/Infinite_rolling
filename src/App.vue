<template>
  <div id="app">
    <header><img src="@/assets/fanhui.png" alt=""><span>一周会议安排</span></header>
    <router-view style="padding-top: 88px"/>
  </div>
</template>

<script>
import { hideWebViewTitle } from '@/core/mxApi'
export default {
    name: "App",
    created() {
        hideWebViewTitle()
    }
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
#app {
    font-family: "PingFangSC", "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
header {
    position: absolute;
    top: 0;
    height: 44px;
    background-color: #fff;
    text-align: center;
    line-height: 44px;
    width: 100%;
    overflow: hidden;
    img {
        height: 44px;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
