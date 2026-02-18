const request = require('supertest');
const app = require('./index');

describe('GET /health', () => {
  it('returns application health metadata', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body).toHaveProperty('environment');
    expect(response.body).toHaveProperty('version');
  });
});
