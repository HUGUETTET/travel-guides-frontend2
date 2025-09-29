import Header from "../../../components/Header";
// import Toc from "@/app/components/Toc";
import { slugify } from "../../../utils/helpers";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

export const revalidate = 60;

// export const params= {
//       slug: string,
//     };
// export const searchParams= {
//     [key= string]: string | string[any] | undefined,
// };
async function getPost(slug) {
    const query = `
    *[_type == "post" && slug.current == "${slug}"][0] {
      title,
      slug,
      publishedAt,
      excerpt,
      _id,
      "headings": body[style in ["h2", "h3", "h4", "h5", "h6"]],
      body,
      tags[]-> {
        _id,
        slug,
        name
      },
    }
    `;
  
    const post = await client.fetch(query);
    return post;
  }

// 🔹 Quitar tipado de retorno
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);
  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.excerpt,
    // openGraph: {
    //   title: post.title,
    //   description: post.excerpt,
    //   type: "article",
    //   locale: "en_US",
    //   url: `https://next-cms-blog-ce.vercel.app/${params.slug}`,
    //   siteName: "DevBlook",
    //   images: [],
    // },
  };
}

// 🔹 Quitar tipado de params y post
const page = async ({ params }) => {
    const { slug } = await params;
    const post = await getPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <span className={`${dateFont?.className} text-purple-500`}>
          {new Date(post?.publishedAt).toDateString()}
        </span>
        <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div>
        <div className={richTextStyles}>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
};

export default page;

// 🔹 Quitar anotaciones `: any`
const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlForImage(value).url()}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
  block: {
    h2: ({ value }) => (
      <h2
        id={slugify(value.children[0].text)}
        className="text-3xl font-bold mb-3"
      >
        {value.children[0].text}
      </h2>
    ),
    h3: ({ value }) => (
      <h3
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h3>
    ),
    h4: ({ value }) => (
      <h4
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h4>
    ),
    h5: ({ value }) => (
      <h5
        id={slugify(value.children[0].text)}
        className="text-2xl font-bold mb-3"
      >
        {value.children[0].text}
      </h5>
    ),
    h6: ({ value }) => (
      <h6
        id={slugify(value.children[0].text)}
        className="text-xl font-bold mb-3"
      >
        {value.children[0].text}
      </h6>
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
