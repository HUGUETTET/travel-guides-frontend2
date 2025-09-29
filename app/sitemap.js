import { client } from "../sanity/lib/client";

export default async function sitemap() {

  async function getPosts() {
    const query = `
    *[_type == "post"] {
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
    const data = await client.fetch(query);
    return data;
  }
  
  const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

  const posts= await getPosts();

  const postUrls = posts.map((post) => ({
    url: FRONTEND_URL + `${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }))

  return [
    {
      url: FRONTEND_URL,
      lastModified: new Date(),
    },
    {
      url: FRONTEND_URL + "/tag",
      lastModified: new Date(),
    },
    ...postUrls, 
  ]
}