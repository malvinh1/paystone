type Props = {
  num: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

const numberToCurrency = ({
  num,
  minimumFractionDigits,
  maximumFractionDigits = 2,
}: Props) => {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits, //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits, //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  // Only format if reach one million
  return Math.abs(num) >= 1.0e6
    ? formatter.format(Math.abs(num) / 1.0e6) + 'M'
    : formatter.format(num);
};

const numberToPercentage = ({
  num,
  minimumFractionDigits,
  maximumFractionDigits = 2,
}: Props) => {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return formatter.format(num);
};

export { numberToCurrency, numberToPercentage };
