import { formatCurrency } from '@/utils/numberFormats';

export const GenericStat: React.FC<{
  title: string;
  value: string;
  currency?: string;
}> = ({ title, value, currency }) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value">
          {currency ? formatCurrency(value, currency) : value}
        </div>
      </div>
    </div>
  );
};
