/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */
// forex
// http://hq.sinajs.cn/rn=jlf43&list=AUDUSD,DINIW,EURUSD,GBPUSD,NZDUSD,USDCAD,USDCHF,USDCNY,USDHKD,USDJPY,USDMYR,USDSGD,USDTWD
/*
var hq_str_AUDUSD="16:46:38,0.6897,0.6899,0.6881,67,0.6881,0.6902,0.6835,0.6897,澳元美元,2020-06-18";
var hq_str_DINIW="16:46:37,97.0384,97.0384,97.0710,2601,97.0704,97.2075,96.9474,97.0384,美元指数,2020-06-18";
var hq_str_EURUSD="16:46:38,1.1253,1.1253,1.1240,38,1.1241,1.1261,1.1223,1.1253,欧元美元,2020-06-18";
var hq_str_GBPUSD="16:46:38,1.2521,1.2523,1.2549,53,1.2548,1.2567,1.2514,1.2521,英镑美元,2020-06-18";
var hq_str_NZDUSD="16:46:38,0.6454,0.6458,0.6453,59,0.6453,0.6479,0.6420,0.6454,新西兰元美元,2020-06-18";
var hq_str_USDCAD="16:46:38,1.3527,1.3532,1.3562,85,1.3561,1.3609,1.3524,1.3527,美元加元,2020-06-18";
var hq_str_USDCHF="16:46:37,0.9493,0.9494,0.9484,28,0.9485,0.9509,0.9481,0.9493,美元瑞郎,2020-06-18";
var hq_str_USDCNY="16:45:16,7.0776,7.0773,7.0855,221,7.0914,7.0935,7.0714,7.0773,美元人民币,2020-06-18";
var hq_str_USDHKD="16:46:36,7.7496,7.7506,7.7496,12,7.7497,7.7504,7.7492,7.7496,美元港元,2020-06-18";
var hq_str_USDJPY="16:46:38,107.04,107.05,106.99,3900,107.00,107.07,106.68,107.04,美元日元,2020-06-18";
var hq_str_USDMYR="15:15:06,4.2720,4.2790,4.2780,220,4.2750,4.2800,4.2580,4.2720,美元马币,2020-06-18";
var hq_str_USDSGD="16:46:38,1.3910,1.3915,1.3929,48,1.3929,1.3957,1.3909,1.3910,美元新加坡元,2020-06-18";
var hq_str_USDTWD="16:46:26,29.5740,29.6040,29.6280,1380,29.6260,29.6280,29.4900,29.5740,美元台币,2020-06-18";
*/

// stock
// https://hq.sinajs.cn/rn=1592300034699&list=gb_iq,rt_hk03690,s_sz300648
/**
var hq_str_gb_iq="爱奇艺,24.7300,2.61,2020-06-18 16:40:15,0.6300,23.0200,25.2400,23.0000,27.5000,14.5100,23431041,15583531,18143046216,-2.23,--,0.00,0.00,0.00,0.00,733645217,0,24.2200,-2.06,-0.51,Jun 18 04:40AM EDT,Jun 17 04:00PM EDT,24.1000,3394,1,2020";
var hq_str_rt_hk03690="MEITUAN-W,美团点评－Ｗ,173.000,172.400,173.800,168.100,172.500,0.100,0.058,172.500,172.600,3574248142.475,20822859,396.552,0.000,175.900,59.150,2020/06/18,16:08:12,100|0,N|Y|Y,172.500|163.900|181.100,0|||0.000|0.000|0.000, |0,Y";
var hq_str_s_sz300648="星云股份,16.01,0.110,0.69,33499,5323";
 */
// const NAME_MAP = {
//   CNY: 'USD',
//   HKD: 'HKDUSD',
// };

class StockFactory {
  constructor(c) {
    this.code = c;
    this.name = `USD${c.toUpperCase()}`;
  }

  getName() {
    return this.name;
  }

  parsePrice() {
    const record = window[`hq_str_${this.name}`].split(',');
    return {
      name: this.name,
      close: record[2],
    };
  }

  getPrice() {
    return {
      ...this.parsePrice(),
      code: this.code,
    };
  }
}

function price(stockList) {
  const stockElemList = stockList.map((code) => new StockFactory(code));
  const query = stockElemList.map((stock) => `${stock.getName()}`).join(',');
  let script = document.querySelector('#live-price');
  if (script) {
    try {
      document.removeChild(script);
    } catch (e) {
      // handle error
    }
  }

  return new Promise(((resolve) => {
    script = document.createElement('script');
    script.id = 'live-price';
    script.src = `http://hq.sinajs.cn/rn=${new Date() - 0}&list=${query}`;
    // eslint-disable-next-line func-names
    script.onload = function () {
      const ret = [];
      stockElemList.forEach((stock) => {
        ret.push(stock.getPrice());
      });

      resolve(ret);
      document.head.removeChild(script);
    };
    document.head.appendChild(script);
  }));
}

export default {
  price,
};
