import { useTranslations } from 'next-intl';

import { formatCurrency, formatPercentage } from '@/utils/numberFormats';

type Props = {
  value: string;
  valueChange: string;
  percentChange: string;
  currency: string;
};

export const PerformanceStat: React.FC<Props> = ({
  value,
  valueChange,
  percentChange,
  currency,
}) => {
  const t = useTranslations('Stats');
  const isLoss = Number(valueChange) < 0;
  return (
    <div className="stat shadow">
      <div className="stat-title">{t('price')}</div>
      <div className="stat-value">{formatCurrency(value, currency)}</div>
      <div className="stat-desc">
        {isLoss ? '↘' : '↗︎'} {formatCurrency(valueChange, currency)}
        {' ('}
        {formatPercentage(percentChange)})
      </div>
    </div>
  );
};
