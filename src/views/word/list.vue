<template>
  <div class="page-world-list">
    <card style="width: 350px" v-for="item in list" :key="item.word">
      <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            {{ item.word }}
      </p>
      <div v-if="item.desc">
        {{ item.desc }}
      </div>
      <img :src="`https://vocab.oss-cn-beijing.aliyuncs.com/${item.word}.jpg?x-oss-process=image/resize,w_320`" alt="">
    </card>
  </div>
</template>

<script>
import '../iview';
import '../style.less';

export default {
  data() {
    const list = [
      'canteen',
      'confectionery',
      'tagline',
      'limbo',
      'hibernation',
      'rivalry',
      'indulgent',
      'heritage',
      'wardrobe',
      'degenerate',
      'allege',
      'unprecedented',
      'vituperation',
      'boilerplate',
      'umbrage',
      'consulate',
      {
        word: 'prospectus',
        desc: 'A prospectus, in finance, is a disclosure document that describes a financial security for potential buyers.',
      },
      'consortium',
    ];

    return {
      list: list.map((val) => {
        if (val.desc) {
          return val;
        }
        return {
          word: val,
        };
      }),
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
