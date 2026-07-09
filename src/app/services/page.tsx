import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Glossy Street detailing, PPF, ceramic coating, wraps, restoration, interior care, and car repair services.",
};

export default function Page() {
  return <ServicesPage />;
}
