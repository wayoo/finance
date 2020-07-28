import axios from 'axios';
import config from '../config';

console.log(config.API_HOST);

const getShareNum = async (code) => {
  const res = await axios.get(`${config.API_HOST}/stock/shares`, {
    params: {
      code: code.join(','),
    },
  });

  if (res.data.code === 22000) {
    return res.data.data;
  }
  throw new Error(res.data.msg);
};

export default {
  getShareNum,
};
