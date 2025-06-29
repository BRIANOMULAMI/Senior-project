import React from "react";
import { UseSchoolsViewTheirCompetitions } from "../../Api/Schools";
import { formatCustomDateTime } from "../../Utils";
import { Loader2 } from "lucide-react";

const MyRequests: React.FC = () => {
  const { data: SCHOOL_REQUESTS, isLoading: REQUESTS_LOADING } =
    UseSchoolsViewTheirCompetitions();
  const getStatusColor = (status: "PENDING" | "APPROVED" | "REJECTED") => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-500";
      case "APPROVED":
        return "bg-green-500";
      case "REJECTED":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        My Competition Requests
      </h2>
      <p className="text-gray-300 mb-4">
        Track the status of your school's applications to various competitions.
        (Note: Status updates are simulated here, in a real app an Admin would
        change them)
      </p>

      {REQUESTS_LOADING ? (
        <Loader2 className="mx-auto animate-spin" />
      ) : SCHOOL_REQUESTS?.length === 0 ? (
        <p className="text-gray-400">
          You have not submitted any competition requests yet. Go to "Available
          Competitions" to apply!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-600">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Competition Name
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Applied On
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {SCHOOL_REQUESTS?.map((req) => (
                <tr key={req.name} className="hover:bg-gray-700">
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    {req.name}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        req.participants[0].status
                      )} text-white`}
                    >
                      {req.participants[0].status}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                    {formatCustomDateTime(req.participants[0].createdAt)}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {/* Actions for School: Withdraw pending, or remove non-pending */}
                    {req.participants[0].status === "PENDING" && (
                      <button className="text-red-400 hover:text-red-300 text-sm">
                        Withdraw
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyRequests;
