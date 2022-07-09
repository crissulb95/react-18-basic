import axios from 'axios';
import { mainUrl } from 'src/adapters/env';
import { configNamesValidator } from './helpers/configNamesValidator';

export const apiInstance = (config) => {
  const validatedConfig = configNamesValidator(config);

  return axios.create({
    baseURL: mainUrl,
    ...validatedConfig
  });
};
