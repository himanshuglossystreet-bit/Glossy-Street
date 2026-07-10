import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse real Glossy Street detailing, ceramic coating, paint correction, PPF, and interior transformation work.",
};

export default function Page() {
  return <GalleryPage />;
}
