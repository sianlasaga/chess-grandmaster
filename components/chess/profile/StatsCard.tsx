interface StatCardProps { label: string; value: string }

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}