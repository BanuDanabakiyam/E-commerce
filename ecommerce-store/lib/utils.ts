import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const indianCurrencyFormatter = new Intl.NumberFormat("en-IN", {
  style: 'currency',
  currency: 'INR'
});

// npm i clsx taiwind-merge