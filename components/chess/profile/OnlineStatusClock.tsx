'use client';

import { useEffect, useState } from 'react';

export default function OnlineStatusClock({ lastOnline }: { lastOnline: number }) {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const update = () => {
      const now = Math.floor(Date.now() / 1000);
      const diff = now - lastOnline;
      
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;
      
      setTime(
        `${hours.toString().padStart(2, '0')}:` +
        `${minutes.toString().padStart(2, '0')}:` +
        `${seconds.toString().padStart(2, '0')}`
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [lastOnline]);

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded">
      <div className={`h-3 w-3 rounded-full ${
        time === '00:00:00' ? 'bg-green-500' : 'bg-gray-400 dark:bg-gray-500'
      }`} />
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Last online</p>
        <p className="font-mono">{time} ago</p>
      </div>
    </div>
  );
}