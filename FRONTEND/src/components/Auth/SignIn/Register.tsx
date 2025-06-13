import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UseAuthRegister } from "../../../Api/Auth";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
const requiredString = z.string().min(1, { message: "This field is required" });
const RegisterSchema = z.object({
  email: requiredString.email("Enter a valid email"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  schoolName: requiredString,
  county: requiredString,
});
export type RegisterType = z.infer<typeof RegisterSchema>;
const Register = () => {
  const { RegisterUser, isLoading } = UseAuthRegister();
  const {
    formState: { errors },
    ...form
  } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      schoolName: "",
      county: "",
    },
  });
  const navaigate = useNavigate();
  const OnRegisterFormsubmit = async (data: RegisterType) => {
    try {
      console.log(data);
      await RegisterUser(data);
      navaigate("/login");
    } catch (error) {
      console.log({ error });
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
      <form onSubmit={form.handleSubmit(OnRegisterFormsubmit)}>
        <h3>Register School Here</h3>
        <div className="form-input">
          <label>School Name</label>
          <input
            type="text"
            placeholder="School name"
            id="school"
            {...form.register("schoolName")}
          />
          {errors.schoolName && (
            <span className="form-errors">{errors.schoolName.message}</span>
          )}
        </div>
        <div className="form-input">
          <label>County</label>
          <input
            type="text"
            placeholder="County"
            id="county"
            {...form.register("county")}
          />
          {errors.county && (
            <span className="form-errors">{errors.county.message}</span>
          )}
        </div>
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

        <button type="submit">
          {isLoading ? (
            <Loader2 className="loader" strokeWidth={2} />
          ) : (
            "Register"
          )}
        </button>
        <div>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </form>
    </>
  );
};

export default Register;
