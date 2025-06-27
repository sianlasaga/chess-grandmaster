import { type GrandmastersAPIResponse } from "@/types/chess";

export const fetchGrandmasters = async (): Promise<string[]> => {
  try {
    const response = await fetch("https://api.chess.com/pub/titled/GM", {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['grandmasters']
      }
    });

    if (!response.ok) {
      throw new Error(`Chess.com API error! Status: ${response.status}`);
    }

    const data: GrandmastersAPIResponse = await response.json();
    return data.players || [];
  } catch (error) {
    console.error("Chess.com API request failed:", error);
    throw error;
  }
};