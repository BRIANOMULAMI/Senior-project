import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { UseAuthLogin } from "../../../Api/Auth";
import { Loader2 } from "lucide-react";
const requiredString = z.string().min(1, { message: "This field is required" });
const LoginSchema = z.object({
  email: requiredString.email("Enter a valid email"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
export type LoginType = z.infer<typeof LoginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const { LoginUser, isLoading } = UseAuthLogin();
  const {
    formState: { errors },
    ...form
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const OnLoginFormSubmit = async (data: LoginType) => {
    try {
      console.log(data);
      await LoginUser(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      form.reset();
    }
  };
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={form.handleSubmit(OnLoginFormSubmit)}>
        <h3>Login Here</h3>
        <div className="form-input">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            {...form.register("email")}
          />
          {errors.email && (
            <span className="form-errors">{errors.email.message}</span>
          )}
        </div>

        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            {...form.register("password")}
          />
          {errors.password && (
            <span className="form-errors">{errors.password.message}</span>
          )}
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? <Loader2 className="loader" strokeWidth={2} /> : "Login"}
        </button>
        <div>
          Dont have an account? <a href="/register">Sign Up</a>
        </div>
      </form>
    </>
  );
};

export default Login;
