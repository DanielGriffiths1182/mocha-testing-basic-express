const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var add = utils.add(33, 11);
      expect(add).toBe(44);
      expect(typeof add).toBe('number');
    })

    it('shoud add a and b async', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7);
        expect(typeof sum).toBe('number');
        done();
      })
    })
  })

  describe('#square', () => {
    it('should square a number', () => {
      var square = utils.square(5);
      expect(square).toBe(25);
      expect(typeof square).toBe('number');
    })

    it('should async square our number a', (done) =>{
        utils.asyncSquare(5, (square) => {
        expect(typeof square).toBe('number');
        expect(square).toEqual(25);
        done();
      });
    })
  })
})
