const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/holdings',
    createProxyMiddleware({
      target: `http://localhost:${process.env.PORT}` || 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};