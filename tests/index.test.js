import app from '../src/app';
import request from 'supertest';

describe('POST /data', () => {
  it('should return status 201', async () => {
    const response = await request(app).post('/data').send({
      concepto: 'Concepto Test',
      monto: 1234.56,
      fecha: '00/00/0000',
      tipo: 'ingreso',
      categoria: null,
    });
    expect(response.statusCode).toBe(201);
  });
});

describe('GET /data', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/data');
    expect(response.statusCode).toBe(200);
  });
  it('should return an array', async () => {
    const response = await request(app).get('/data');
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /data/:id', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/data/1');
    expect(response.statusCode).toBe(200);
  });
  it('should return an object', async () => {
    const response = await request(app).get('/data/1');
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe('PUT /data/:id', () => {
  it('should return status 201', async () => {
    const response = await request(app).put('/data/1').send({
      concepto: 'Concepto Test Nuevo',
      monto: 6543.21,
      fecha: '00/00/0000',
      tipo: 'ingreso',
      categoria: null,
    });
    expect(response.statusCode).toBe(200);
  });
});

describe('DELETE /data/:id', () => {
  it('should return status 200', async () => {
    const response = await request(app).delete('/data/1');
    expect(response.statusCode).toBe(200);
  });
});
