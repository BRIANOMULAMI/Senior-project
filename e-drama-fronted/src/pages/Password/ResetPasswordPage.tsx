import { UseChangePassword } from "@/Api/User";
import { Loader2Icon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  code: string;
  password: string;
  confirmPassword: string;
};

const ResetPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Props>({
    defaultValues: {
      code: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { email } = useParams();
  const navigate = useNavigate();

  const { mutateAsync: ChangePassword, isPending: ChangePasswordPending } =
    UseChangePassword();

  const HandleSubmit = async ({
    code,
    password,
  }: Pick<Props, "code" | "password">) => {
    const values: Pick<Props, "code"> & { email: string; newPassword: string } =
      {
        code,
        newPassword: password,
        email: email || "",
      };
    try {
      await ChangePassword(values, {
        onSuccess: () => {
          navigate("/login");
        },
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-200 dark:border-gray-700 text-left">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 text-center">
          Reset Password
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Enter the code sent to your email and choose a new password.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit(HandleSubmit)}>
          {/* Verification Code */}
          <div>
            <label
              htmlFor="code"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Verification Code
            </label>
            <input
              id="code"
              type="text"
              placeholder="Enter verification code"
              {...register("code", {
                required: "Verification Code is required",
                validate: (value) =>
                  value.length === 8 ||
                  "Verification Code must be 8 characters",
              })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.code && (
              <p className="text-red-500 text-sm mt-1">{errors.code.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              New Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter new password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (val) => {
                  if (!val) {
                    return "This Field is required";
                  } else if (val !== watch("password")) {
                    return "Passwords do not match";
                  }
                  return true;
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium transition duration-200"
          >
            {ChangePasswordPending ? (
              <Loader2Icon className="mx-auto animate-spin" />
            ) : (
              " Reset Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
