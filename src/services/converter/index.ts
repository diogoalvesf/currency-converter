import httpClient from '../../http-client';

export default {
  async convertDollarToReal() {
    try {
      const { data } = await httpClient.get('/last/USD-BRL');

      return data;
    } catch (error) {
      throw new Error();
    }
  },
};
