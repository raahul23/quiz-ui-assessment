type Props = { current: number; total: number };

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full" aria-hidden>
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium">Question {current} / {total}</div>
        <div className="text-sm text-muted">{pct}%</div>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-2" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
