import { ChessPlayerProfile } from "@/types/chess";

export async function fetchPlayerProfile(username: string): Promise<ChessPlayerProfile> {
  const response = await fetch(`https://api.chess.com/pub/player/${username}`, {
    next: { 
      revalidate: 3600,
      tags: [`player-${username}`] 
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch profile for ${username}`);
  }

  const data = await response.json();
  
  return data as ChessPlayerProfile;
}