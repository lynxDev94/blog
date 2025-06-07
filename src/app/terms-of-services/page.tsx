import React from "react";
import MainNav from "@/components/ui/main-nav";
import Container from "@/components/ui/Container";
import { getTermsOfServices } from "../blog/utils";
import { CustomMDX } from "@/components/CustomMDX";

function Page() {
  const post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
  );
  return (
    <Container>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}

export default Page;
