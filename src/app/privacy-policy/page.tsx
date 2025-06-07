import Container from "@/components/ui/Container";
import { getPrivacyPolicy } from "../blog/utils";
import MainNav from "@/components/ui/main-nav";
import { CustomMDX } from "@/components/CustomMDX";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privary Policy",
  description: "This page explains the Privacy Policy of the site.",
};

export default function Page() {
  const post = getPrivacyPolicy().find((post) => post.slug === "privacy-policy");

  return (
    <Container>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}