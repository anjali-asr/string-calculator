import { expect } from 'chai';
import { addString } from '../src/calculator.js';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(addString("")).to.equal(0);
  });

  it('should return the number when only one number is passed', () => {
    expect(addString("1")).to.equal(1);
  });
});

