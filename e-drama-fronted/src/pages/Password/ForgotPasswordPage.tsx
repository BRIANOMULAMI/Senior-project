import { UseUserSendVerifyEmail } from "@/Api/User";
import { Loader2Icon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  email: string;
}

const ForgotPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({
    defaultValues: {
      email: "",
    },
  });
  const navigate = useNavigate();
  const { mutateAsync: VerifyEmail, isPending: isVerifying } =
    UseUserSendVerifyEmail();

  const HandleSubmit = async (data: Props) => {
    try {
      await VerifyEmail(data.email, {
        onSuccess: () => {
          navigate(`/reset-password/${data.email}`);
        },
      });
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-200 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Forgot Password
        </h2>
        <p className="text-gray-600 mb-4">
          Enter your email address below and we'll send you a link to reset your
          password.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(HandleSubmit)}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your email"
              {...register("email", {
                required: "This Field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format, Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-base mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <button
            disabled={isVerifying}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-semibold shadow-md cursor-pointer"
          >
            {isVerifying ? (
              <Loader2Icon className="animate-spin mx-auto" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
        <div className="mt-4 text-sm">
          <Link to="/login" className="text-indigo-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
