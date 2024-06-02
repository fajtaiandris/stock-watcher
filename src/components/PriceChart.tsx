'use client';

import React from 'react';
import { Chart } from 'react-charts';
import type { z } from 'zod';

import type { timeSeriesDailyResponseSchema } from '@/libs/alphavantage/types';

export const PriceChart: React.FC<{
  data: z.infer<typeof timeSeriesDailyResponseSchema>;
}> = ({ data }) => {
  // Extract dates and closing prices from the data
  const dates = Object.keys(data['Time Series (Daily)']).sort();
  const closingPrices = dates.map((date) => ({
    primary: new Date(date),
    secondary: parseFloat(
      data?.['Time Series (Daily)']?.[date]?.['4. close'] ?? '0',
    ),
  }));

  const chartData = [
    {
      label: `${data['Meta Data']['2. Symbol']} Closing Prices`,
      data: closingPrices,
    },
  ];

  const primaryAxis = { getValue: (datum: { primary: any }) => datum.primary };
  const secondaryAxes = [
    { getValue: (datum: { secondary: any }) => datum.secondary },
  ];

  return <Chart options={{ data: chartData, primaryAxis, secondaryAxes }} />;
};
