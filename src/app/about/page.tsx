import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Himanshu & Glossy Street",
  description: "Meet Himanshu and the Glossy Street car detailing studio built around careful paint correction, coating, and restoration work.",
};

export default function Page() {
  return <AboutPage />;
}
