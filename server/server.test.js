const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server', () => {

  describe('GET /', () => {
    it('should return hello response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect({error: 'page not found'})
        .expect((res) => {
          expect(res.body).toInclude({error: 'page not found'});
        })
        .end(done);
    })
  })

  describe('GET /users', () => {
    it('should return users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(typeof res.body).toBe('object');
          expect(typeof res.body[0].name).toBe('string');
          expect(typeof res.body[0].age).toBe('number');
          console.log(res.body);
        })
        .end(done);
    })
  })
})
