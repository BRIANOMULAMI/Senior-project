import ky, { HTTPError } from "ky";
import { toast } from "sonner";

const BASE_URL = import.meta.env.VITE_BACKEND_URL!;
export const kyClinet = ky.create({
  prefixUrl: `${BASE_URL}/api/`,
});

export const HandleErrors = async ({
  e,
  message = "Something went wrong, please try again later",
}: {
  e: Error;
  message?: string;
}) => {
  if (e instanceof HTTPError) {
    const error = await e.response.json();
    toast.error(error?.message || message);
  }
};

export function formatCustomDateTime(inputDate: string | Date): string {
  const date = new Date(inputDate);

  const day = date.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const month = date.toLocaleString("en-US", { month: "long" }); // "May"
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}${suffix} ${month}, ${year} at ${hours}:${minutes}hrs`;
}
