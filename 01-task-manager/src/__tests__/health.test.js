import request from 'supertest';
import app from '../app.js';

describe('GET /health', () => {
  it('should return 200 and a message', async () => {
    const res = await request(app).get('/health');

    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ status: 'Server is running!' });
  });
});
