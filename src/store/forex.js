import api from '../api/forex';

function reverseUSD(val, decimal = 4) {
  const enlarge = 10 ** decimal;
  return Math.round(enlarge / val) / enlarge;
}

export default {
  state: {
    CNYUSD: 0.14131,
    HKDUSD: 0.12903,
    USDCNY: '',
    USDHKD: '',
  },
  mutations: {
    SET_CNY(state, val) {
      state.USDCNY = val;
      state.CNYUSD = reverseUSD(val);
    },
    SET_HKD(state, val) {
      state.USDHKD = val;
      state.HKDUSD = reverseUSD(val);
    },
  },
  actions: {
    asyncUpdateCurrency(context) {
      return api.price(['CNY', 'HKD']).then((res) => {
        context.commit('SET_CNY', res[0].close - 0);
        context.commit('SET_HKD', res[1].close - 0);
      });
    },
  },
};
