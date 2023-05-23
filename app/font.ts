import { Barlow, Fraunces } from "next/font/google";

export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
});
export const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
