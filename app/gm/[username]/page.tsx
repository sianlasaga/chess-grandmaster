import { fetchPlayerProfile } from '@/lib/chess/api/players';
import ProfileError from '@/components/chess/profile/ProfileError';
import ProfileContainer from '@/components/chess/profile/ProfileContainer';

interface PageProps {
  params: { username: string };
}

export default async function GrandmasterProfilePage({ params }: PageProps) {
  const { username } = await params
  try {
    const profile = await fetchPlayerProfile(username);
    
    return (
      <div className="max-w-6xl mx-auto p-4">
        <ProfileContainer profile={profile} />
      </div>
    );
  } catch (error) {
    return <ProfileError username={username} />;
  }
}