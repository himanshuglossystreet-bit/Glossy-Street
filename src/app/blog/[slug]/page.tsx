import type { Metadata } from "next";
import BlogPostPage from "@/components/pages/BlogPostPage";

export const metadata: Metadata = {
  title: "Detailing Guide",
};

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogPostPage slug={params.slug} />;
}
