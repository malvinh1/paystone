import { numberToCurrency, numberToPercentage } from '../numberFormatter';

describe('numberToCurrency test case', () => {
  it('should convert to the exact currency', () => {
    expect(
      numberToCurrency({
        num: 3000,
      })
    ).toBe('$3,000.00');
    expect(
      numberToCurrency({
        num: 35518940.5326,
      })
    ).toBe('$35.52M');
  });

  it('should convert to the exact percentage', () => {
    expect(
      numberToPercentage({
        num: 0.5,
      })
    ).toBe('50%');
    expect(
      numberToPercentage({
        num: 1,
      })
    ).toBe('100%');
  });
});
