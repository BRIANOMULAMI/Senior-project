import { Popover, PopoverTrigger } from "../ui/popover";
import type { FestivalEvent } from "@/Types/types";
import { useForm } from "react-hook-form";
import { Edit2Icon, Loader2Icon, XIcon } from "lucide-react";
import { UseAdminUpdateCompetition } from "@/Api/Competition";
import { useState } from "react";

interface StatusProps {
  name: string;
  value: string;
}

interface EditCompetitionPageProps {
  competition?: Omit<FestivalEvent, "judges"> | null;
}

const STATUS_DATA: StatusProps[] = [
  { name: "UPCOMING", value: "UPCOMING" },
  { name: "ACTIVE", value: "ACTIVE" },
  { name: "COMPLETED", value: "COMPLETED" },
];

const EditCompetitionDialogue: React.FC<EditCompetitionPageProps> = ({
  competition,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: UpdateCompetition, isPending: UpdateLoading } =
    UseAdminUpdateCompetition();

  const { register, handleSubmit } = useForm<Omit<FestivalEvent, "judges">>({
    defaultValues: competition ?? {
      id: "",
      name: "",
      venue: "",
      schedule: "",
      maxParticipants: "",
      status: "UPCOMING",
      description: "",
    },
  });

  const onSubmit = async (data: Omit<FestivalEvent, "judges">) => {
    const Values: Omit<FestivalEvent, "judges"> = {
      ...data,
      id: competition?.id ?? "",
    };
    try {
      await UpdateCompetition(Values);
      setIsOpen(false); // close after success
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <button
            onClick={() => setIsOpen(true)}
            className="text-blue-400 hover:text-blue-300 cursor-pointer"
          >
            <Edit2Icon className="size-5" color="blue" />
          </button>
        </PopoverTrigger>
      </Popover>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-gray-800 text-white rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <XIcon className="size-6" />
            </button>

            <h2 className="text-2xl font-semibold mb-4">Edit Competition</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Competition Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
                  placeholder="Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Venue</label>
                <input
                  type="text"
                  {...register("venue")}
                  className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
                  placeholder="Venue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Schedule</label>
                <input
                  type="datetime-local"
                  {...register("schedule")}
                  className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Max Participants
                </label>
                <input
                  type="number"
                  {...register("maxParticipants")}
                  className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Status</label>
                <select
                  {...register("status")}
                  className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
                >
                  {STATUS_DATA.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  {...register("description")}
                  className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 p-2 text-white"
                  placeholder="Competition description"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              >
                {UpdateLoading ? (
                  <Loader2Icon className="mx-auto animate-spin" />
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

export default EditCompetitionDialogue;
