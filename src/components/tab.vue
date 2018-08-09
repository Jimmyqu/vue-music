<template>
    <div id="tab">
      <router-link
        v-for="item in ['/recommend','/singer','/rank','/search']"
        :key="item"
        tag="div"
        :to="item"
        class="tab-item"
        active-class="active-tab-item"
      >
        {{item.slice(1)}}
      </router-link>

    </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped lang="less">
  #tab{
    display: flex;
    flex-direction: row;
    .tab-item{
      flex:1;
      text-align: center;
      height: 0.5rem;
      line-height: 0.5rem;
      color: #000;
    }
    .active-tab-item{
      border-bottom: 0.02rem rebeccapurple solid;
      padding-bottom: -0.02rem;
      background-color: rebeccapurple;
      color: #fff;
    }
  }
</style>
