import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Premium Car Detailing Studio",
};

export default function Page() {
  return <HomePage />;
}
