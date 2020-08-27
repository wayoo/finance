<template>
  <div>
    <div>USDCNY {{ this.USDCNY }} USDHKD {{ this.USDHKD }}</div>
    <div v-if="!isLoading">
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-mixed-operators */
import api from '@/api/stock';
import financeApi from '@/api/finance';
import { Chart } from 'highcharts-vue';
import { mapState } from 'vuex';

export default {
  components: {
    highcharts: Chart,
  },
  data() {
    console.log(this.$store.state);
    return {
      isLoading: true,
      chartOptions: {
        chart: {
          type: 'column',
          height: `${8 / 16 * 100}%`, // 16:9 ratio
        },
        title: {
          text: 'Stock Market Value Rank List',
        },
        xAxis: {
          categories: [
            // x name
          ],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Rainfall (mm)',
          },
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: ''
            + '<td style="padding:0"><b>{point.y:.3f} B</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [{
          name: 'Tokyo',
          dataLabels: [{
            align: 'top',
            format: '{y:.2f}',
          }],
          data: [],
        }],
      },
    };
  },
  computed: {
    ...mapState({
      USDCNY: (state) => state.forex.USDCNY,
      USDHKD: (state) => state.forex.USDHKD,
      CNYUSD: (state) => state.forex.CNYUSD,
      HKDUSD: (state) => state.forex.HKDUSD,
    }),
  },
  created() {
    const priceMap = {};
    const stockCodeList = ['aapl', 'jd', 'tcom',
      'li',
      'goog',
      'brk$a',
      'msft',
      'fb',
      'pdd',
      'sbux',
      'nflx', 'amzn', 'dis',
      'ua', 'nke', 'el',
      'ko',
      'edu',
      'baba',
      'hmi',
      'nio',
      'gpro',
      'sina',
      'bynd',
      'tme',
      'uber', 'lyft',
      'bidu', 'tsla', 'sogo', 'IQ', '3690',
      '0700', '1810', '6862', '1458',
      '600519', '601398',
    ];
    const apiCallStockList = [];
    const domesticStockInfoList = [];
    api.price(stockCodeList).then((res) => {
      this.isLoading = false;
      res.forEach((item, i) => {
        priceMap[stockCodeList[i]] = item.close - 0;
      });
      // US stock data fetched;
      // const data = res.sort((a, b) => b.market_value - a.market_value);
      const mixData = res;
      // filter domestic stock and use financeApi to get share number
      mixData.forEach((stock, i) => {
        if (!stock.market_value) {
          apiCallStockList.push(stock.code);
          domesticStockInfoList.push({
            index: i,
            type: stock.type,
            code: stock.code,
          });
        }
      });

      financeApi.getShareNum(apiCallStockList).then((arrResp) => {
        arrResp.forEach((resp, i) => {
          const info = domesticStockInfoList[i];
          // set data
          mixData[info.index].market_value = resp.share_num
            * priceMap[info.code] * (info.type === 'CN' ? this.CNYUSD : this.HKDUSD);
          mixData[info.index].is_cn_stock = true;
        });

        console.log(mixData);
        const data = mixData.sort((a, b) => b.market_value - a.market_value);
        this.draw(data);
      });
      console.log(res);
      console.log(this.CNYUSD, this.HKDUSD);
    });
  },
  methods: {
    draw(data) {
      this.chartOptions.xAxis.categories = data.map((item) => item.name);
      this.chartOptions.series[0].data = data.map((item) => {
        if (item.market_value) {
          return {
            y: (item.market_value - 0) / 1000000000,
            color: item.is_cn_stock ? '#fa7c91' : '#7cb5ec',
          };
        }
        return 0;
      });
    },
  },
};
</script>
