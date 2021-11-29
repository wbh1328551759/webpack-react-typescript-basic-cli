let apiUrl: string;

const apiUrlMap: {[key: string]: string} = {
  dev: 'https://server-pre.com/api',
  pre: 'https://server-pre.com/api',
  prod: 'https://server.com/api',
}

apiUrl = apiUrlMap[process.env.API_ENV]

export default apiUrl;
