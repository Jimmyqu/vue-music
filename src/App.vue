<template>
  <div id="app">
    <h2>index</h2>
    <tab></tab>
    <router-view>

    </router-view>
  </div>
</template>

<script>
  import Tab from '../src/components/tab'
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style lang="less">
  @import '../static/css/var.less';

  #app{

  }
</style>
