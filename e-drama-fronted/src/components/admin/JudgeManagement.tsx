import React from "react";
import { useForm } from "react-hook-form";
import { UseAdminCreateJudge, UseAdminGetAllJudges } from "../../Api/judge";
import { Loader2 } from "lucide-react";
import EditJudgeDetails from "./EditJudgeDetails";

interface JudgeProps {
  name: string;
  email: string;
  password: string;
  nationalId: string;
}

const JudgeManagement: React.FC = () => {
  const {
    formState: { errors },
    ...form
  } = useForm<JudgeProps>({
    defaultValues: {
      email: "",
      name: "",
      nationalId: "",
      password: "",
    },
  });
  const { mutateAsync, isPending: CreateJudgeLoading } = UseAdminCreateJudge();
  const { data: JUDGES, isLoading: JUDGES_LOADING } = UseAdminGetAllJudges();
  const HandleCreateJudge = async (data: JudgeProps) => {
    console.log({ data });
    try {
      await mutateAsync(data);
      form.reset();
    } catch (error) {
      console.log({ error });
    }
  };

  console.log(JSON.stringify(JUDGES, null, 2));

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-md border border-gray-600">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6">
        Judge Management
      </h2>

      {/* Judge Creation/Edit Form */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-inner mb-8">
        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          Add New Judge
        </h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={form.handleSubmit(HandleCreateJudge)}
        >
          {/* Judge Name */}
          <div>
            <label
              htmlFor="judgeName"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Judge Name
            </label>
            <input
              type="text"
              id="judgeName"
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., John Doe"
              {...form.register("name", { required: "This field is required" })}
            />
            {errors.name && (
              <span className="text-base text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="judgeEmail"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="judgeEmail"
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., john.doe@example.com"
              {...form.register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-base text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="nationalId"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              National Id
            </label>
            <input
              type="text"
              id="nationalId"
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., john.doe@example.com"
              {...form.register("nationalId", {
                required: "This field is required",
              })}
            />
            {errors.nationalId && (
              <span className="text-base text-red-600">
                {errors.nationalId.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="judgePassword"
              className="block text-gray-300 text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="judgePassword"
              className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Set initial password"
              {...form.register("password", {
                required: "This field is required",
              })}
            />
            {errors.password && (
              <span className="text-base text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit/Cancel Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="submit"
              disabled={CreateJudgeLoading}
              className="bg-indigo-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 shadow-md cursor-pointer"
            >
              {CreateJudgeLoading ? (
                <Loader2 className="mx-auto animate-spin" />
              ) : (
                " Add Judge"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* List of Judges */}
      {JUDGES_LOADING ? (
        <Loader2 className="flex items-center justify-center mx-auto" />
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4">
            All Judges ({JUDGES?.length})
          </h3>
          {JUDGES?.length === 0 ? (
            <p className="text-gray-400">
              No judges added yet. Use the form above to add one.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-600">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Email
                    </th>

                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Assigned Competitions
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-200 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  {JUDGES?.map((judge) => (
                    <tr key={judge.id} className="hover:bg-gray-650">
                      <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                        {judge.name}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-gray-200">
                        {judge.email}
                      </td>
                      <td className="py-3 px-4 text-gray-200">
                        {judge.judge._count.competitions > 0 ? (
                          <span className="inline-block bg-indigo-500 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                            {judge.judge._count.competitions || 0}
                          </span>
                        ) : (
                          <span className="text-gray-400">None</span>
                        )}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <EditJudgeDetails judge={judge} />
                          <button className="text-red-400 hover:text-red-300">
                            Delete
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

export default JudgeManagement;
