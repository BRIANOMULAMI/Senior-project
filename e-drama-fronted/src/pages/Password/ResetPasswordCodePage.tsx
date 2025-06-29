import { UseUserVerifyCode } from "@/Api/User";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Loader2Icon } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  code: string;
}

const ResetPasswordCodePage = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Props>({
    defaultValues: {
      code: "",
    },
  });

  const { email } = useParams();
  const { mutateAsync: VerifyCode, isPending: isVerifying } =
    UseUserVerifyCode();

  const handleFormSubmit = async (data: Props) => {
    try {
      const values = { code: data.code, email: email || "" };
      await VerifyCode(values, {
        onSuccess: () => navigate(`/reset-password/${email}`),
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Enter Verification Code
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-6">
          A verification code was sent to your email. Please enter it below.
        </p>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <Controller
            name="code"
            control={control}
            rules={{
              required: "Verification code is required",
              validate: (value) =>
                value.length === 8 ||
                "Verification code must be exactly 8 characters",
            }}
            render={({ field }) => (
              <InputOTP
                maxLength={8}
                value={field.value}
                onChange={field.onChange}
                className="mx-auto"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
            )}
          />

          {errors.code && (
            <p className="text-red-500 text-sm text-center">
              {errors.code.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isVerifying}
            className="w-full py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {isVerifying ? (
              <Loader2Icon className="animate-spin mx-auto" />
            ) : (
              "Verify Code"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordCodePage;
