import type { Metadata } from "next";
import BlogPage from "@/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "Detailing Blog & Guides",
  description: "Read Glossy Street guides on ceramic coating, PPF, paint correction, car detailing, and Indian car care.",
};

export default function Page() {
  return <BlogPage />;
}
