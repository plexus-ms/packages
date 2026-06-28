import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names with clsx semantics, then resolve conflicting Tailwind
 * utilities via tailwind-merge so the last-declared utility wins.
 *
 * @example cn("px-2", isActive && "px-4") // -> "px-4" when active
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
