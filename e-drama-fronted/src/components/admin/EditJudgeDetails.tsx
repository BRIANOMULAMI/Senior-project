import { useState } from "react";
import { Popover, PopoverTrigger } from "../ui/popover";
import { Loader2Icon, PenSquare, X } from "lucide-react";
import { useForm } from "react-hook-form";
import type { JudgeUser } from "@/Types/types";
import { UseAdminUpdateJudge } from "@/Api/judge";

interface EditJudgeDetailsBody {
  email: string;
  password: string;
  name: string;
  nationalId: string;
}

interface Props {
  judge: JudgeUser;
}

const EditJudgeDetails = ({ judge }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mutateAsync, isPending } = UseAdminUpdateJudge();

  const { handleSubmit, register } = useForm<EditJudgeDetailsBody>({
    defaultValues: {
      email: judge?.email || "",
      name: judge?.name || "",
      nationalId: judge?.judge.nationalId || "",
      password: "",
    },
  });

  const HandleEditUser = async (Values: EditJudgeDetailsBody) => {
    try {
      await mutateAsync(Values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button
            onClick={() => setIsOpen(true)}
            className="text-blue-500 hover:text-blue-400"
          >
            <PenSquare className="size-5" />
          </button>
        </PopoverTrigger>
      </Popover>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-4">
          <div className="relative bg-gray-800 text-white w-full max-w-lg rounded-xl shadow-lg p-6 space-y-4 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="size-6" />
            </button>

            <h1 className="text-2xl font-semibold">Edit Judge Details</h1>

            <form onSubmit={handleSubmit(HandleEditUser)} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter judge's name"
                  {...register("name")}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter judge's email"
                  {...register("email")}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">National ID</label>
                <input
                  type="text"
                  placeholder="Enter judge's national ID"
                  {...register("nationalId")}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  {...register("password")}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold"
                disabled={isPending}
              >
                {isPending ? (
                  <Loader2Icon className="animate-spin mx-auto" />
                ) : (
                  "Save Changes"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditJudgeDetails;
