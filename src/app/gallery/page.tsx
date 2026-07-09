import type { Metadata } from "next";
import GalleryPage from "@/components/pages/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse Glossy Street detailing transformations, paint correction work, coating results, and restoration projects.",
};

export default function Page() {
  return <GalleryPage />;
}
