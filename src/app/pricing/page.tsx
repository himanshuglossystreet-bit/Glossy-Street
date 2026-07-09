import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description: "View Glossy Street pricing for car detailing, ceramic coating, PPF, paint correction, deep cleaning, and car care services.",
};

export default function Page() {
  return <PricingPage />;
}
