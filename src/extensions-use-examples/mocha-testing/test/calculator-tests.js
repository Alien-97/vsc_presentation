var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect; //Libreria que provee los funciones de afirmaciones para realizar las pruebas
var calculator = require('../calculator');

describe('Testing assert function: ', function() {
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = calculator.addTest(1,1);
       assert.equal(result, 2);
    });
  });
})