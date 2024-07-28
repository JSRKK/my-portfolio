import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPrefix(src: string) {
  if (process.env.NODE_ENV === "production") {
    return `/my-portfolio/${src}`;
  }
  return src;
}
