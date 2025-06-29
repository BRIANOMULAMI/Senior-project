import React from "react";
import { UseAdminGetAllCompetitions } from "../../Api/Competition";
import { formatCustomDateTime } from "../../Utils";
import { Loader2 } from "lucide-react";
import { UseSchoolRegisterForCompetitions } from "../../Api/Schools";

const AvailableCompetitions: React.FC = () => {
  const { data: COMPETITIONS, isLoading: ComLoading } =
    UseAdminGetAllCompetitions();
  const { mutateAsync: SchoolApplyCompetition, isPending: RegPending } =
    UseSchoolRegisterForCompetitions();

  const availableCompetitions = COMPETITIONS?.filter(
    (c) => c.status !== "COMPLETED"
  );

  const handleApply = async (competitionId: string) => {
    try {
      await SchoolApplyCompetition(competitionId);
    } catch (error) {
      console.log({ error });
    }
  };

  const getStatusColor = (status: "UPCOMING" | "ACTIVE" | "COMPLETED") => {
    switch (status) {
      case "UPCOMING":
        return "bg-indigo-500";
      case "ACTIVE":
        return "bg-green-500";
      case "COMPLETED":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Available Competitions
      </h2>
      <p className="text-gray-300 mb-4">
        Explore the competitions currently open for applications. Apply to
        participate in your school's next big drama event!
      </p>

      {ComLoading ? (
        <Loader2 className="flex justify-center items-center h-full mx-auto animate-spin" />
      ) : availableCompetitions?.length === 0 ? (
        <p className="text-gray-400">
          No available competitions to apply for at the moment, or you've
          already applied to all of them.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCompetitions?.map((comp) => (
            <div
              key={comp.id}
              className="bg-gray-800 p-5 rounded-lg shadow-inner border border-gray-700 hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                {comp.name}
              </h3>
              <p className="text-gray-300 mb-1">Location: {comp.venue}</p>
              <p className="text-gray-300 mb-1">
                Date: {formatCustomDateTime(comp.schedule)}
              </p>
              <p className="text-gray-300 mb-4">
                Max Schools: {comp.maxParticipants}
              </p>
              <p className="text-gray-300 mb-4">
                Status:
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    comp.status
                  )}`}
                >
                  {comp.status}
                </span>
              </p>
              <button
                onClick={() => handleApply(comp.id)}
                disabled={RegPending}
                className="bg-indigo-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 shadow-md w-full cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableCompetitions;
