import React from "react";
import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import Header from "@/components/ui/Header";
import Container from "@/components/ui/Container";
import { BreadCrumbMain } from "@/components/ui/BreadcrumbMain";
import { CustomMDX } from "@/components/CustomMDX";

// this makes it statically generated
export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;

  const post = getBlogPosts().find((post) => post.slug === slug);
  console.log(post);
  if (!post) {
    notFound();
  }

  return (
    <>
      <Header>
        <Container>
          <BreadCrumbMain category={post.metaData.category} slug={post.slug} />
          <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
            {post.metaData.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metaData.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
}

export default Page;
