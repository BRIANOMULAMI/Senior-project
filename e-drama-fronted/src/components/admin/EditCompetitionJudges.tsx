import { useState } from "react";
import { UsersIcon, PlusIcon, XIcon, Loader2Icon } from "lucide-react";
import { UseAdminGetCompetitionJudges, UseGetAllJudges } from "@/Api/judge";
import { UseAdminAddJudge, UseAdminRemoveJudge } from "@/Api/Competition";

interface Props {
  id: string;
}

const EditCompetitionJudges = ({ id }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: ALL_JUDGES, isLoading: ALL_JUDGES_LOADING } = UseGetAllJudges();
  const { data: COMPETITIONS_JUDGES, isLoading: JUDGES_LOADING } =
    UseAdminGetCompetitionJudges(id);
  const { mutateAsync: ADD_JUDGE, isPending: ADD_JUDGE_LOADING } =
    UseAdminAddJudge();
  const { mutateAsync: REMOVE_JUDGE, isPending: REMOVE_JUDGE_LOADING } =
    UseAdminRemoveJudge();

  const Pending = ADD_JUDGE_LOADING || REMOVE_JUDGE_LOADING;

  const assignedJudgeIds = new Set(COMPETITIONS_JUDGES?.map((j) => j.id) || []);

  const isAssigned = (judgeId: string) => assignedJudgeIds.has(judgeId);

  const handleToggleJudge = async (
    judgeId: string,
    action: "add" | "remove"
  ) => {
    const data: { competitionId: string; judgeId: string } = {
      competitionId: id,
      judgeId: judgeId,
    };
    if (action === "add") {
      await ADD_JUDGE(data);
      setIsOpen(false);
    } else {
      await REMOVE_JUDGE(data);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-blue-500 hover:text-blue-300"
      >
        <UsersIcon className="size-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-800 text-white rounded-lg shadow-lg p-6">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <XIcon className="size-6" />
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              Manage Competition Judges
            </h2>

            {ALL_JUDGES_LOADING || JUDGES_LOADING ? (
              <div className="flex justify-center items-center h-48">
                <Loader2Icon className="animate-spin size-6 text-gray-300" />
              </div>
            ) : (
              <ul className="space-y-4">
                {ALL_JUDGES?.map((judge) => {
                  const assigned = isAssigned(judge.id);
                  return (
                    <li
                      key={judge.id}
                      className="flex justify-between items-center border-b border-gray-700 pb-3"
                    >
                      <div>
                        <p className="font-medium">{judge.user.name}</p>
                        <p className="text-sm text-gray-400">
                          {judge.user.email}
                        </p>
                      </div>
                      <button
                        disabled={Pending}
                        onClick={() =>
                          handleToggleJudge(
                            judge.id,
                            assigned ? "remove" : "add"
                          )
                        }
                        className={`p-1 rounded-full ${
                          assigned
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-green-600 hover:bg-green-700"
                        }`}
                        title={assigned ? "Remove Judge" : "Add Judge"}
                      >
                        {assigned ? (
                          <XIcon className="size-4" />
                        ) : (
                          <PlusIcon className="size-4" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EditCompetitionJudges;
