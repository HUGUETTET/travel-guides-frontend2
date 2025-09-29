import PostComponent from "../../../components/PostComponent";
// import { Post } from "@/app/utils/interface";
import Header from "../../../components/Header";
// import Toc from "@/app/components/Toc";
import { client } from "../../../../sanity/lib/client";
import React from "react";

async function getPostsByTag(tag) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;

const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
export async function generateMetadata({ params }) {
    const { slug } = await params;
    return {
        title: `#${slug}`,
        description: `Posts with the tag ${slug}`,
        openGraph: {
        title: `#${slug}`,
        description: `Posts with the tag ${slug}`,
        type: "website",
        locale: "en_US",
        url: FRONTEND_URL +`/${slug}`,
        siteName: "DevBlook",
        },
    };
}

const page = async ({ params }) => {
    const { slug } = await params;
    const posts = await getPostsByTag(slug);

//   const posts = await getPostsByTag(params.slug);
  console.log(posts, "posts by tag");
  return (
    <div>
      <Header title={`#${slug}`} tags />
      <div>
        {posts?.length > 0 &&
            posts?.map((post) => (
                <PostComponent key={post?._id || post.slug?.current} post={post} />
            ))
        }
          {/* posts?.map((post) => <PostComponent key={post?._id} post={post} />)} */}
      </div>
    </div>
  );
};

export default page;