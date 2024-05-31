export const formatCurrency = (value: string, currency: string) => {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol', // $123 instead of US$123
  };
  return new Intl.NumberFormat(undefined, options).format(Number(value));
};

export const formatPercentage = (value: string) => {
  const options: Intl.NumberFormatOptions = {
    style: 'percent',
    minimumFractionDigits: 2,
  };
  return new Intl.NumberFormat(undefined, options).format(
    Number(value.replace('%', '')) / 100,
  );
};
