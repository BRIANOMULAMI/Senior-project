import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthRegister } from "../Api/Auth";
import { Loader2 } from "lucide-react";

export interface UserProps {
  name: string;
  email: string;
  password: string;
  county: string;
}

const SignupPage: React.FC = () => {
  const {
    formState: { errors },
    ...form
  } = useForm<UserProps>();

  const { mutateAsync, isPending } = UseAuthRegister();
  const navigate = useNavigate();

  const handleSubmit = async (values: UserProps) => {
    try {
      await mutateAsync(values);
      navigate("/login");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up for E-DRAMA
        </h2>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="schoolName"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              School Name
            </label>
            <input
              type="text"
              id="schoolName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., St. Peter's High School"
              {...form.register("name", { required: "This Field is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name?.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="schoolCounty"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              School County
            </label>
            <input
              type="text"
              id="schoolCounty"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Nairobi"
              {...form.register("county", {
                required: "This Field is required",
              })}
            />
            {errors.county && (
              <span className="text-red-500 text-xs">
                {errors.county?.message}
              </span>
            )}
          </div>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="school@example.com"
              {...form.register("email", {
                required: "This Field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              {...form.register("password", {
                required: "This Field is required",
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password?.message}
              </span>
            )}
          </div>
          <button
            disabled={isPending}
            type="submit"
            className="cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-md"
          >
            {isPending ? (
              <Loader2 className="animate-spin mx-auto" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
