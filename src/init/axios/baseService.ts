import axios from 'axios';
import Config from 'react-native-config';
import {load, remove, save} from '../../utils/storage';
import {getErrorMessage} from '../../utils/getErrorMessage';

const accessToken = 'accessToken';

export const authAccessTokenHeaderName = 'Authorization';

const baseService = axios.create({
  baseURL: `${Config.API_KEY}`,
});

export const saveTokens = async (access_token: string) => {
  await save(accessToken, access_token);
};

export const setAuthHeader = (access_token: string) => {
  console.log('access_token', access_token);
  baseService.defaults.headers.common[
    authAccessTokenHeaderName
  ] = `Bearer ${access_token}`;
};
baseService.interceptors.response.use(
  response => {
    if (response.data && response.data[accessToken]) {
      saveTokens(response.data[accessToken]);
      setAuthHeader(response.data[accessToken]);
    }
    return response;
  },
  async error => {
    if (error.response?.status === 401) {
      try {
        const currentRefreshToken = await load('refreshToken');
        if (currentRefreshToken) {
          const response = (await axios.post(
            `${Config.API_KEY}auth/refreshToken`,
            {refreshToken: currentRefreshToken},
          )) as any;
          await save('accessToken', response.accessToken);
          await save('refreshToken', response.refreshToken);
          setAuthHeader(response.data[response.accessToken]);
        }
      } catch (err) {
        getErrorMessage(err);
        remove('accessToken');
      }
    }

    return Promise.reject(error);
  },
);

export default baseService;
