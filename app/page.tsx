import GrandmasterList from "@/components/chess/gm-list/GrandmasterList";
import { fetchGrandmasters } from "@/lib/chess/api/grandmasters";
import DataFetchError from "@/components/ui/error/DataFetchError";

export default async function Home() {
  try {
    const grandmasters = await fetchGrandmasters();

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Chess Grandmasters</h1>
        <GrandmasterList grandmasters={grandmasters} />
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto p-4">
        <DataFetchError
          title="Grandmasters List Unavailable"
          message="Failed to load the list of chess grandmasters. Please try again later."
        />
      </div>
    );
  }
}