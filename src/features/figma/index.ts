import axios, { AxiosResponse, AxiosError } from 'axios';

import { token } from './token.json';

export const fetchingWithFigma = async () => {
  axios
    .get('https://www.figma.com/file/WR322D8c3LosEFjHTiQ22U/Splash-Screen-valorant-app', {
      headers: {
        'X-Figma-token': token,
      },
    })
    .then((response: AxiosResponse) => {
      const result = JSON.stringify(response.data);
      alert(result);
    })
    .catch((error: AxiosError) => {
      alert(error.response);
    });
};
