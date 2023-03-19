import axios from 'axios';

const API_URL = 'http://localhost:1337';

import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Stop global loader here
    return processResponse(response);
  },
  function (error) {
    // Stop global loader here
    return Promise.reject(processError(error));
  }
);

//////////////////////////////
// if success = return { isSuccess: true, data: object }
// if fail = return { isFailure: true, string, msg: string, code: int }
//////////////////////////////
const processResponse = (response) => {
  if (response?.status == 200 || response?.status == 201) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.message,
      code: response?.code,
    };
  }
};

//////////////////////////////
// if success = return { isSuccess: true, data: object }
// if fail = return { isFailure: true, string, msg: string, code: int }
//////////////////////////////
const processError = (error) => {
  if (error.response) {
    // Request made and server responded with a status other
    // than that falls within the range 2.x.x
    console.log('ERROR IN RESPONSE', error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    // Request made but no response was received
    console.log('ERROR IN NETWORK', error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: '',
    };
  } else {
    // Something happened in writing a request that triggers error
    console.log('ERROR IN REQUEST', error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: '',
    };
  }
};

const JSON_API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  JSON_API[key] = (body, showUploadProgress, showDownloadProgress) => {
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
  };
}

export { JSON_API };
