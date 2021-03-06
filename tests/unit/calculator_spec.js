var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add 1 to 4 and get 5', function () {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.strictEqual(calculator.runningTotal, 5)
  } )

  it('it can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('it can multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('it can divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('it can concatenate mulitiple number button clicks', function(){
    calculator.runningTotal = 0;
    calculator.numberClick(6);
    calculator.numberClick(6);
    calculator.numberClick(6);
    assert.strictEqual(calculator.runningTotal, 666);
  })

  it('it can chain multiple operations together', function(){
    calculator.previousOperator = '+';
    calculator.previousTotal = 4;
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 4);
  })

  it('it can clear the running total without affecting the calculation', function() {
    calculator.runningTotal = 9;
    calculator.clearClick()
    assert.strictEqual(calculator.runningTotal, 0);
  })

});
