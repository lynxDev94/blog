import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchUrl = process.env.NODE_ENV === "development"? 'http://localhost:3000/api' : 'http://blog-neon-nine-36.vercel.app'
//  if not dev, should be page url