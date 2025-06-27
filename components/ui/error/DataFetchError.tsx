'use client';

interface DataFetchErrorProps {
  title?: string;
  message?: string;
}

export default function DataFetchError({
  title = "Data Unavailable",
  message = "We couldn't load the requested data.",
}: DataFetchErrorProps) {
  return (
    <div className="rounded-lg bg-red-100 p-4 text-red-800 dark:bg-red-900/30 dark:text-red-200">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="mb-3">{message}</p>
    </div>
  );
}