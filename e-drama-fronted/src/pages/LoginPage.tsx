import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { UserProps } from "./SignupPage";
import { UseAuthLogin } from "../Api/Auth";
import { Loader2 } from "lucide-react";
import { UseAuthContext } from "../context/ AuthContext";

const LoginPage: React.FC = () => {
  const {
    formState: { errors },
    ...form
  } = useForm<Pick<UserProps, "email" | "password">>();
  const { role, isLoading: roleLoading } = UseAuthContext();
  const { mutateAsync, isPending, isSuccess } = UseAuthLogin();
  const navigate = useNavigate();

  const handleSubmit = async (
    values: Pick<UserProps, "password" | "email">
  ) => {
    try {
      await mutateAsync(values);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    if (isSuccess && !roleLoading && role) {
      switch (role) {
        case "ADMIN":
          navigate("/admin-dashboard");
          break;
        case "JUDGE":
          navigate("/judge-dashboard");
          break;
        case "SCHOOL":
          navigate("/school-dashboard");
          break;
        default:
          navigate("/");
          break;
      }
    }
  }, [isSuccess, navigate, role, roleLoading]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to E-DRAMA
        </h2>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your email"
              {...form.register("email", {
                required: "This Field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">
                {errors.email?.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your password"
              {...form.register("password", {
                required: "This Field is required",
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-xs">
                {errors.password?.message}
              </span>
            )}
          </div>
          <button
            disabled={isPending}
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-semibold shadow-md"
          >
            {isPending ? (
              <Loader2 className="animate-spin mx-auto" />
            ) : (
              "  Login"
            )}
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Don't have an account?
            <Link to="/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </Link>
          </p>
          <p className="text-gray-600 mt-2">
            <Link
              to="/forgot-password"
              className="text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
