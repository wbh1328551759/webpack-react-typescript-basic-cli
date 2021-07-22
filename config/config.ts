let serverUrl: string;

if (process.env.NODE_ENV === 'development') {
  serverUrl = 'http://test-server-pre.com';
} else if (process.env.NODE_ENV === 'production') {
  serverUrl = 'http://test-server.com';
}

export default serverUrl;
