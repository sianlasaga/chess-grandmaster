import Link from 'next/link';

interface ProfileErrorProps {
  username: string;
}

export default function ProfileError({ username }: ProfileErrorProps) {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-lg p-6">
        <h2 className="text-xl font-bold text-red-800 dark:text-red-200 mb-2">
          Player Not Found
        </h2>
        <p className="text-red-700 dark:text-red-300 mb-4">
          Could not load profile for {username}. The player may not exist or Chess.com may be experiencing issues.
        </p>
        <Link 
          href="/" 
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Grandmasters List
        </Link>
      </div>
    </div>
  );
}