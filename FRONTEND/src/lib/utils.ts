import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ky, { HTTPError } from "ky";
import { toast } from "sonner";
import { HandleErrorsType } from "@/Types/Types";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const BASE_URL = import.meta.env.VITE_BACKEND_URL!;
export const kyClinet = ky.create({
  prefixUrl: `${BASE_URL}/api/`,
});

export const HandleErrors = async ({
  e,
  message = "Something went wrong, please try again later",
}: HandleErrorsType) => {
  if (e instanceof HTTPError) {
    const error = await e.response.json();
    toast.error(error?.message || message);
  }
};
