'use client';

import { ChessPlayerProfile } from '@/types/chess';
import OnlineStatusClock from './OnlineStatusClock';
import Image from 'next/image';
import StatCard from './StatsCard';

interface ProfileContainerProps {
  profile: ChessPlayerProfile;
}

export default function ProfileContainer({ profile }: ProfileContainerProps) {
  const countryCode = profile.country?.split('/').pop()?.toLowerCase();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        {/* Profile Header */}
        <div className="p-6 flex flex-col sm:flex-row gap-6 items-center">
          {profile.avatar && (
            <Image
              src={profile.avatar}
              alt={profile.username}
              width={120}
              height={120}
              className="rounded-full border-4 border-gray-200 dark:border-gray-600"
              priority
            />
          )}
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{profile.username}</h1>
            </div>
            
            {profile.name && (
              <p className="text-gray-600 dark:text-gray-300">{profile.name}</p>
            )}
            
            {countryCode && (
              <div className="mt-2 flex items-center gap-1">
                <span className={`fi fi-${countryCode} rounded`}></span>
                <span>{countryCode.toUpperCase()}</span>
              </div>
            )}
          </div>
        </div>

        {/* Status Section */}
        <div className="px-6 pb-6">
          <OnlineStatusClock lastOnline={profile.last_online} />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <StatCard label="Followers" value={profile.followers?.toLocaleString() ?? '0'} />
            <StatCard label="Status" value={profile.status} />
            <StatCard 
              label="Joined" 
              value={new Date(profile.joined * 1000).toLocaleDateString()} 
            />
            <StatCard label="League" value={profile.league ?? 'N/A'} />
          </div>
        </div>
      </div>
    </div>
  );
}
