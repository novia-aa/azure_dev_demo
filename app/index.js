const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const environment = process.env.APP_ENV || 'dev';

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    environment,
    version: process.env.APP_VERSION || 'v1.0.0'
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
}

module.exports = app;
