import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { UseAdminUpdateJudge } from "@/Api/judge";
const requireString = z
  .string()
  // .min(1, { message: "This field is required" })
  .optional();
const schema = z.object({
  name: requireString,
  email: requireString,
  password: requireString,
  nationalId: requireString,
});

type FormData = z.infer<typeof schema>;
const TestCreateJudge = () => {
  const { mutateAsync, ...mutation } = UseAdminUpdateJudge();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      nationalId: "",
    },
  });

  const onSubmit = async (vals: Partial<FormData>) => {
    const filteredData = Object.fromEntries(
      Object.entries(vals).filter(([_key, value]) => value?.trim() !== "") // eslint-disable-line @typescript-eslint/no-unused-vars
    );
    const data = {
      ...filteredData,
      id: "cmazmfpa80000lkr4j2pay35o",
    };
    console.log("data", data);
    await mutateAsync(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="johndoe@gmail.com"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="nationalId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>National Id</FormLabel>
              <FormControl>
                <Input {...field} placeholder="national id" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} placeholder="*********" type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          {mutation.isPending ? "Creating..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default TestCreateJudge;
