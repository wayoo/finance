<template>
  <div class="page-world-list">
    <card style="width: 350px" v-for="item in list" :key="item">
      <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            {{ item }}
        </p>
      <img :src="`https://vocab.oss-cn-beijing.aliyuncs.com/${item}.jpg?x-oss-process=image/resize,w_320`" alt="">
    </card>
  </div>
</template>

<script>
import '../iview';
import '../style.less';

export default {
  data() {
    return {
      list: [
        'canteen',
        'confectionery',
        'tagline',
        'limbo',
        'hibernation',
      ],
    };
  },
};
</script>

<style lang="less">
.page-world-list {
  .ivu-card {
    margin: 10px auto;
  }
}
</style>
