import { twMerge } from "tailwind-merge";

const cn = (...args: string[]) => {
  return twMerge(...args);
};

export { cn };
