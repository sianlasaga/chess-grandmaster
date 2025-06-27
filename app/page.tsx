import GrandmasterList from "@/components/list/GrandmasterList";
import { fetchGrandmasters } from "@/lib/chess/grandmasters";

export default async function Home() {
  const grandmasters = await fetchGrandmasters();

  if (grandmasters.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="rounded-lg bg-red-100 p-4 text-red-800 dark:bg-red-900/30 dark:text-red-200">
          <h2 className="mb-2 text-xl font-semibold">Failed to load data</h2>
          <p>Please try refreshing the page or check back later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <GrandmasterList grandmasters={grandmasters} />
    </div>
  );
}