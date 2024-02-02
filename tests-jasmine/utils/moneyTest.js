import {formatCurrency} from "../../scripts/utils/money.js";

//unit tests = testing 1 piece of the code

// describe - create a test suite. You have to put a name
// it - create a test and you have to put a name to the test
//expect - insert the code that you want to test

describe('test suite: formatCurrency', function() {
  it('converts cents into dollars', function() {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', function() {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', function() {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('rounds down to the nearest cent', function() {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
});