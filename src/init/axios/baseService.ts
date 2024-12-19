import axios from 'axios';
import Config from 'react-native-config';
import {load, remove, save} from '../../utils/storage';

const accessToken = 'accessToken';

export const authAccessTokenHeaderName = 'Authorization';

const baseService = axios.create({
  baseURL: `${Config.API_KEY}`,
});

export const saveTokens = async (access_token: string) => {
  await save(accessToken, access_token);
};

export const setAuthHeader = (access_token: string) => {
  baseService.defaults.headers.common[
    authAccessTokenHeaderName
  ] = `Bearer ${access_token}`;
};

export default baseService;
