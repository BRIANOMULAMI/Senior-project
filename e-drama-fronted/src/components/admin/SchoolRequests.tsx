import React from "react";
import {
  UseAdminChangeParticipationStatus,
  UseAdminDeleteCompetitionParticipant,
  UseAdminGetCompetitionApplicationRequests,
} from "../../Api/Competition";
import { Loader2, Trash2 } from "lucide-react";

const SchoolRequests: React.FC = () => {
  const { data: COMPETITIONS, isLoading: ComLoading } =
    UseAdminGetCompetitionApplicationRequests();
  const { mutateAsync: UpdateStatus, isPending: UpdatePending } =
    UseAdminChangeParticipationStatus();
  const { mutateAsync: DeleteParticipant, isPending: DeletePending } =
    UseAdminDeleteCompetitionParticipant();
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

  const HandleRequestStatusChange = async (data: {
    id: string;
    status: "PENDING" | "APPROVED" | "DENIED";
  }) => {
    try {
      await UpdateStatus(data);
    } catch (error) {
      console.log({ error });
    }
  };

  const HandleDeleteRequest = async (id: string) => {
    try {
      await DeleteParticipant(id);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        School Requests
      </h2>
      {ComLoading ? (
        <Loader2 className="animate-spin mx-auto flex justify-center items-center" />
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            All School Requests ({COMPETITIONS?.length})
          </h3>
          {COMPETITIONS?.length === 0 ? (
            <p className="text-gray-400">
              No school requests received yet. Click "Simulate New School
              Request" to add one.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-600">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      School Name
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Competition
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {COMPETITIONS?.map((req) => (
                    <tr key={req.competition.id} className="hover:bg-gray-650">
                      <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                        {req.school.user.name}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                        {req.competition.name}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                            req.competition.participants[0].status
                          )} text-white`}
                        >
                          {req.competition.participants[0].status}
                        </span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          {req.competition.participants[0].status ===
                            "PENDING" && (
                            <>
                              <button
                                className="text-green-400 hover:text-green-300"
                                onClick={() =>
                                  HandleRequestStatusChange({
                                    id: req.competition.id,
                                    status: "APPROVED",
                                  })
                                }
                                disabled={UpdatePending}
                              >
                                Approve
                              </button>
                              <button
                                className="text-red-400 hover:text-red-300"
                                onClick={() =>
                                  HandleRequestStatusChange({
                                    id: req.competition.id,
                                    status: "DENIED",
                                  })
                                }
                                disabled={UpdatePending}
                              >
                                Deny
                              </button>
                            </>
                          )}
                          <button
                            className="text-gray-400 hover:text-gray-300"
                            disabled={DeletePending}
                            onClick={() =>
                              HandleDeleteRequest(req.competition.id)
                            }
                          >
                            <Trash2 className="text-red-600 size-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SchoolRequests;
