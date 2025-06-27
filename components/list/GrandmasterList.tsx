'use client';

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { GM_ITEMS_PER_PAGE } from "@/lib/contants";

interface GrandmasterListProps {
  grandmasters: string[];
}

export default function GrandmasterList({ grandmasters }: GrandmasterListProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  // Calculate pagination values
  const totalPages = Math.ceil(grandmasters.length / GM_ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * GM_ITEMS_PER_PAGE;
  const paginatedData = useMemo(
    () => grandmasters.slice(startIndex, startIndex + GM_ITEMS_PER_PAGE),
    [grandmasters, startIndex]
  );

  // Update URL with new page number
  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  // Handle page number on load
  useEffect(() => {
    if (currentPage < 1) setPage(1);
    if (currentPage > totalPages && totalPages > 0) setPage(totalPages);
  }, [currentPage, totalPages]);

  // Generate visible page numbers
  const visiblePages = useMemo(() => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <div className="container mx-auto p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Chess Grandmasters ({grandmasters.length})</h1>
      
      {/* Pagination Controls - Top */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
        >
          Next
        </button>
      </div>

      {/* Grandmasters List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {paginatedData.map(gm => (
          <Link key={gm} href={`/gm/${gm}`}>
            <div className="border p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors dark:border-gray-700">
              <h2 className="text-xl font-semibold">{gm}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls - Bottom */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPage(1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
        >
          First Page
        </button>
        <div className="flex gap-2">
          {visiblePages.map(pageNum => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`px-3 py-1 rounded ${
                currentPage === pageNum 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              } transition-colors cursor-pointer`}
            >
              {pageNum}
            </button>
          ))}
        </div>
        <button
          onClick={() => setPage(totalPages)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer"
        >
          Last Page
        </button>
      </div>
    </div>
  );
}