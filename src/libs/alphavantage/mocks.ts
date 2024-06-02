export const mockOverviewResponse = {
  Symbol: 'AAPL',
  AssetType: 'Stock',
  Name: 'Apple Inc',
  Description:
    'Apple Inc designs, manufactures, and markets mobile communication and media devices...',
  CIK: '0000320193',
  Exchange: 'NASDAQ',
  Currency: 'USD',
  Country: 'USA',
  Sector: 'Technology',
  Industry: 'Consumer Electronics',
  Address: 'One Apple Park Way, Cupertino, CA, USA',
  FiscalYearEnd: 'September',
  LatestQuarter: '2022-12-31',
  MarketCapitalization: '2000000000000',
  EBITDA: '100000000000',
  PERatio: '35.23',
  PEGRatio: '2.1',
  BookValue: '4.5',
  DividendPerShare: '0.88',
  DividendYield: '0.005',
  EPS: '5.67',
  RevenuePerShareTTM: '100',
  ProfitMargin: '0.21',
  OperatingMarginTTM: '0.25',
  ReturnOnAssetsTTM: '0.15',
  ReturnOnEquityTTM: '0.3',
  RevenueTTM: '500000000000',
  GrossProfitTTM: '200000000000',
  DilutedEPSTTM: '6.00',
  QuarterlyEarningsGrowthYOY: '0.1',
  QuarterlyRevenueGrowthYOY: '0.05',
  AnalystTargetPrice: '150',
  AnalystRatingStrongBuy: '10',
  AnalystRatingBuy: '15',
  AnalystRatingHold: '5',
  AnalystRatingSell: '0',
  AnalystRatingStrongSell: '0',
  TrailingPE: '30.5',
  ForwardPE: '28.5',
  PriceToSalesRatioTTM: '8.5',
  PriceToBookRatio: '5.3',
  EVToRevenue: '7.5',
  EVToEBITDA: '25',
  Beta: '1.2',
  '52WeekHigh': '180',
  '52WeekLow': '120',
  '50DayMovingAverage': '160',
  '200DayMovingAverage': '150',
  SharesOutstanding: '5000000000',
  DividendDate: '2023-02-01',
  ExDividendDate: '2023-01-15',
};

export const mockGlobalQuoteResponse = {
  'Global Quote': {
    '01. symbol': 'AAPL',
    '02. open': '150.00',
    '03. high': '155.00',
    '04. low': '148.00',
    '05. price': '152.00',
    '06. volume': '30000000',
    '07. latest trading day': '2023-02-01',
    '08. previous close': '150.00',
    '09. change': '2.00',
    '10. change percent': '1.33%',
  },
};

export const mockStockData = {
  overview: mockOverviewResponse,
  quote: mockGlobalQuoteResponse,
};

export const mockStockSearchResult = {
  bestMatches: [
    {
      '1. symbol': 'AAPL',
      '2. name': 'Apple Inc',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7, timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0',
    },
  ],
};
