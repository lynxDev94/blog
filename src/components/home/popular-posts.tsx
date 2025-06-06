'use client';

import React from "react";
import { Icons } from "../ui/icons";
import useSWR from 'swr'


import { fetcher, fetchUrl } from "@/lib/utils";
import Link from "next/link";

function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return <div>Failed to load... </div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className="overflow-auto">
      {data?.map((post: {category: string, title: string, slug: string}) => (
        <Link href={`blog/${post.category}/${post.slug}`} key={post.title}>
        <li
          key={post.title}
          className="flex items-center gap-2 group cursor-pointer py-2"
        >
          <Icons.ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
          <p>{post.title}</p>
        </li>
        </Link>
      ))}
    </ul>
  );
}

export default PopularPosts;
