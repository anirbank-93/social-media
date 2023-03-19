// API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: 'Loading...',
    message: 'Data is being loaded, please wait.',
  },
  success: {
    title: 'Success',
    message: 'Data successfully loaded.',
  },
  responseFailure: {
    title: 'Error',
    message:
      'An error occurred while fetching response from the server. Please try again.',
  },
  requestFailure: {
    title: 'Error',
    message: 'An error occured while parsing error data',
  },
  networkError: {
    title: 'Error',
    message:
      'Unable to connect with server. Please check your internet connectivity.',
  },
};

// API SERVICE CALL
// SAMPLE REQUEST
// NEED SERVICE CALL: {url: '/', method: 'POST/GET/PUT/DELETE', params: true/false, query: true/false, responseType}
export const SERVICE_URLS = {
  createPost: { url: '/api/posts', method: 'POST' },
  getAllPost: { url: '/api/posts', method: 'GET' },
};
