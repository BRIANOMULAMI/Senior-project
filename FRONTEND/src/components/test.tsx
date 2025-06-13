import { UseAdminDeleteJudge, UseAdminGetAllJudges } from "@/Api/judge";
import { Loader2, Trash2Icon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton"; // Consider adding a skeleton loader component

const TestFetchJudge = () => {
  const { data, hasNextPage, fetchNextPage, status } = UseAdminGetAllJudges();
  const { mutateAsync, ...mutation } = UseAdminDeleteJudge();

  if (status === "pending")
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-2xl" />
        ))}
      </div>
    );

  if (status === "error")
    return (
      <div className="text-center py-8 bg-red-50 rounded-2xl">
        <p className="text-red-600 font-medium">Failed to load judges</p>
      </div>
    );

  const judges = data.pages.flatMap((page) => page.judges);
  const handleDeleteJudge = async (id: string) => {
    await mutateAsync(id);
  };
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-4">
        {judges.map((judge) => (
          <div
            key={judge.id}
            className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 ease-out"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  {judge.name}
                </h2>
                <p className="text-sm text-gray-600">{judge.email}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Joined{" "}
                  {new Date(judge.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <button
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                onClick={handleDeleteJudge.bind(null, judge.id)}
              >
                {mutation.isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Trash2Icon className="w-5 h-5 text-gray-400 hover:text-red-600 transition-colors" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {hasNextPage && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => fetchNextPage()}
            className="px-6 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 
                       bg-white hover:bg-gray-50 border border-gray-200 rounded-full shadow-sm
                       transition-all duration-150 ease-in-out transform hover:-translate-y-0.5"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default TestFetchJudge;
