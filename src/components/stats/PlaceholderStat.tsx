export const PlaceholderStat: React.FC = () => {
  return (
    <div className="stat gap-2 shadow">
      <div className="stat-title">
        <div className="skeleton h-5 w-20" />
      </div>
      <div className="stat-value">
        <div className="skeleton h-12 w-full" />
      </div>
    </div>
  );
};
