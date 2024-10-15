import { expect } from 'chai';
import { addString } from '../src/calculator.js';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(addString("")).to.equal(0);
  });

  it('should return the number when only one number is passed', () => {
    expect(addString("1")).to.equal(1);
  });

  it('should return the sum of two numbers separated by a comma', () => {
    expect(addString("1,7")).to.equal(8);
  });  

  it('should return the sum of multiple numbers', () => {
    expect(addString("1,2,3")).to.equal(6);
  });

  it('should handle newlines between numbers', () => {
    expect(addString("1\n2,3")).to.equal(6);
  });

  it('should support custom delimiters', () => {
    expect(addString("//;\n1;2")).to.equal(3);
  });
  
});

