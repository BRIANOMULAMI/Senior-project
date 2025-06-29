import React from "react";
import { UseJudgeAwardMarks, UseJudgeGetAllCompetitons } from "../../Api/judge";
import { useForm } from "react-hook-form";
import { UseJudgeGetCompetitonPerfomers } from "../../Api/Competition";
import type { AwardMarksProps } from "../../Types/types";
import { Loader2Icon } from "lucide-react";

interface Props {
  id: string;
  perfomerId: string;
  score: string;
  comment: string;
}

const AwardMarksComments: React.FC = () => {
  const {
    formState: { errors },
    ...form
  } = useForm<Props>({
    defaultValues: {
      id: "",
      perfomerId: "",
      comment: "",
      score: "",
    },
  });

  const { data: ASSIGNEDCOMPETITIONS } = UseJudgeGetAllCompetitons();
  const activeAndUpcomingCompetitions =
    ASSIGNEDCOMPETITIONS?.filter((comp) => comp.status === "ACTIVE") || [];

  const selectedCompetitionId = form.watch("id");
  const selectedPerformanceId = form.watch("perfomerId");

  const { data: PERFOMERS, isLoading: PERFOMERS_LOADING } =
    UseJudgeGetCompetitonPerfomers(selectedCompetitionId);

  const { mutateAsync: AwardMarks, isPending: AwardMarksLoading } =
    UseJudgeAwardMarks();

  const HandleMarksSubmit = async (
    data: Pick<Props, "comment" | "perfomerId" | "score">
  ) => {
    try {
      const Values: AwardMarksProps = {
        comment: data.comment,
        id: data.perfomerId,
        score: data.score,
      };
      await AwardMarks(Values);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Award Marks & Comments
      </h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner mb-8">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          1. Select Competition
        </h3>
        <select
          {...form.register("id")}
          className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">-- Select a Competition --</option>
          {activeAndUpcomingCompetitions?.map((comp) => (
            <option key={comp.id} value={comp.id}>
              {comp.name} ({comp.status})
            </option>
          ))}
        </select>
        {activeAndUpcomingCompetitions?.length === 0 && (
          <p className="text-gray-400 text-sm mt-2">
            No active or upcoming competitions assigned.
          </p>
        )}
      </div>

      {/* Step 2: Select School/Performance */}
      {selectedCompetitionId && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner mb-8">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            2. Select Performance
          </h3>
          <select
            {...form.register("perfomerId")}
            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">-- Select a Performance --</option>
            {PERFOMERS?.length === 0 ? (
              <option value="" disabled>
                No performances found for this competition
              </option>
            ) : (
              PERFOMERS?.map((perf) => {
                if (PERFOMERS_LOADING) {
                  return <Loader2Icon className="animate-spin mx-auto" />;
                } else {
                  return (
                    <option key={perf.id} value={perf.id}>
                      {perf.school.user.name} - {perf.competition.name}
                    </option>
                  );
                }
              })
            )}
          </select>
          {PERFOMERS?.length === 0 && (
            <p className="text-gray-400 text-sm mt-2">
              No performances currently available for this competition.
            </p>
          )}
        </div>
      )}

      {/* Step 3: Enter Marks and Comments */}
      {selectedPerformanceId && (
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            3. Enter Marks & Comments
          </h3>
          <form
            onSubmit={form.handleSubmit(HandleMarksSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* Marks Input */}
            <div>
              <label
                htmlFor="marks"
                className="block text-gray-300 text-sm font-medium mb-1"
              >
                Marks (0-100)
              </label>
              <input
                type="number"
                id="marks"
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                {...form.register("score", {
                  required: "Marks are required",
                  min: { value: 0, message: "Minimum mark is 0" },
                  max: { value: 100, message: "Maximum mark is 100" },
                })}
                placeholder="e.g., 85"
              />
              {errors.score && (
                <span className="text-base text-red-600">
                  {errors.score.message}
                </span>
              )}
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="comments"
                className="block text-gray-300 text-sm font-medium mb-1"
              >
                Comments
              </label>
              <textarea
                id="comments"
                rows={4}
                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y"
                placeholder="Provide constructive feedback here..."
                {...form.register("comment", {
                  required: "This field is required",
                })}
              />
              {errors.comment && (
                <span className="text-base text-red-600">
                  {errors.comment.message}
                </span>
              )}
            </div>

            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                disabled={AwardMarksLoading}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md"
              >
                {AwardMarksLoading ? (
                  <Loader2Icon className="animate-spin mx-auto" />
                ) : (
                  "Submit Score"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AwardMarksComments;
