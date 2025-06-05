import React from "react";
import { getBlogPosts } from "../utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CardCategory from "@/components/ui/CardCategory";

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;

  const posts = getBlogPosts().filter(
    (post) => post.metaData.category == category
  );

  if (!posts) {
    notFound();
  }
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metaData.publishedAt) >
                new Date(b.metaData.publishedAt)
              ) {
                return -1;
              }

              return 1;
            })
            .map((post) => (
              <Link
                key={post.metaData.title}
                href={`blog/${post.metaData.category}/${post.slug}`}
              >
                <CardCategory
                  title={post.metaData.title}
                  summary={post.metaData.summary}
                  date={post.metaData.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
