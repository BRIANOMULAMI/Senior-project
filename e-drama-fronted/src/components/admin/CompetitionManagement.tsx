import React from "react";
import { useForm } from "react-hook-form";
import {
  UseAdminCreateCompetiton,
  UseAdminDeleteCompetition,
  UseAdminGetAllCompetitions,
} from "../../Api/Competition";
import { Loader2, Loader2Icon, Trash2Icon } from "lucide-react";
import { formatCustomDateTime } from "../../Utils";
import { UseGetAllJudges } from "../../Api/judge";
import EditCompetitionDialogue from "./EditCompetitionDialogue";
import EditCompetitionJudges from "./EditCompetitionJudges";

interface Competition {
  id: string;
  name: string;
  location: string;
  time: Date;
  description: string;
  judgeId: string[];
  status: "UPCOMING" | "ACTIVE" | "COMPLETED";
  maxSchools: string;
}

const CompetitionManagement: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Omit<Competition, "id">>();
  const { data: COMPETITIONS, isLoading: compLoading } =
    UseAdminGetAllCompetitions();
  const { data: JUDGES } = UseGetAllJudges();
  const { mutateAsync, isPending: CreateComPending } =
    UseAdminCreateCompetiton();
  const { mutateAsync: DeleteCompetition, isPending: DeleteComLoading } =
    UseAdminDeleteCompetition();

  const HandleSubmit = async (data: Omit<Competition, "id">) => {
    try {
      await mutateAsync(data);
      reset();
    } catch (error) {
      console.log({ error });
    }
  };

  const handleDeleteCompetiton = async (id: string) => {
    await DeleteCompetition(id);
  };

  const getStatusColor = (status: Competition["status"]) => {
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
        Competition Management
      </h2>

      {/* Competition Creation/Edit Form */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner mb-8">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          Create New Competition
        </h3>
        <form
          onSubmit={handleSubmit(HandleSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Competition Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Competition Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: "This Field is required",
              })}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Annual Drama Fest"
            />
            {errors.name && (
              <span className="text-base text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              {...register("location", { required: "This Field is required" })}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., City Auditorium"
            />
            {errors.location && (
              <span className="text-base text-red-600">
                {errors.location.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Date/Time
            </label>
            <input
              type="datetime-local"
              id="time"
              {...register("time", { required: "This field is required" })}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 2025-12-01 10:00 AM"
            />
            {errors.time && (
              <span className="text-base text-red-600">
                {errors.time.message}
              </span>
            )}
          </div>

          <div>
            <label
              htmlFor="maxSchools"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Max Schools
            </label>
            <input
              type="number"
              id="maxSchools"
              {...register("maxSchools", {
                required: "This Field is required",
              })}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 20"
              min="1"
            />
            {errors.maxSchools && (
              <span className="text-base text-red-600">
                {errors.maxSchools.message}
              </span>
            )}
          </div>

          {/* Status Select Field */}
          <div>
            <label
              htmlFor="status"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Status
            </label>
            <select
              id="status"
              {...register("status", { required: "This field is required" })}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="UPCOMING">Upcoming</option>
              <option value="ACTIVE">Active</option>
              <option value="COMPLETED">Completed</option>
            </select>
            {errors.status && (
              <span className="text-base text-red-600">
                {errors.status.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="judge"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Assign Judges
            </label>
            <select
              id="judge"
              multiple
              {...register("judgeId", { required: "This field is required" })}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option disabled>--SELECT ATLEAST ONE JUDGE ---</option>
              {JUDGES?.map((j) => (
                <option value={j.id} key={j.id}>
                  {j.user.name} - {j.user.email}
                </option>
              ))}
            </select>
            {errors.judgeId && (
              <span className="text-base text-red-600">
                {errors.judgeId.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "This Field is required",
              })}
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., 20"
              cols={4}
            />
            {errors.description && (
              <span className="text-base text-red-600">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="md:col-span-1"></div>

          {/* Submit/Cancel Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md cursor-pointer"
            >
              {CreateComPending ? (
                <Loader2 className="mx-auto animate-spin" />
              ) : (
                "Add Competition"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* List of Competitions */}
      {compLoading ? (
        <Loader2 className="mx-auto animate-spin size-5" />
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            All Competitions ({COMPETITIONS?.length})
          </h3>
          {COMPETITIONS?.length === 0 ? (
            <p className="text-gray-400">No competitions created yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-600">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Max Schools
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Status
                    </th>
                    {/* ADDED */}
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {COMPETITIONS?.map((comp) => (
                    <tr key={comp.id} className="hover:bg-gray-650">
                      <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                        {comp.name}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                        {comp.venue}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                        {formatCustomDateTime(comp.schedule)}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                        {comp.maxParticipants}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                            comp.status
                          )} text-white`}
                        >
                          {comp.status}
                        </span>
                      </td>
                      {/* ADDED */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <EditCompetitionDialogue competition={comp} />
                          <EditCompetitionJudges id={comp.id} />
                          <button
                            onClick={() => handleDeleteCompetiton(comp.id)}
                            className="text-red-400 hover:text-red-300 cursor-pointer"
                          >
                            {DeleteComLoading ? (
                              <Loader2Icon className="animate-spin size-5" />
                            ) : (
                              <Trash2Icon className="size-5" color="red" />
                            )}
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

export default CompetitionManagement;
