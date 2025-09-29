import TestCRUD from "../components/TestCRUD";

// export default function Home() {
//   return (
//     <>
//     <html>
//       <body>
//         <main className="container mx-auto p-6">
//           <h1 className="text-3xl font-bold">Travel Guides</h1>
//           <p className="mt-4">Tu espacio para guías mochileras.</p>
//           <TestCRUD></TestCRUD>
//         </main>
//       </body>
//     </html>
//     </>
//   )
// }

// import { client } from "@/sanity/lib/client";
import { client } from "../../sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";

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

export const revalidate = 60;

export default async function Home() {
  const posts = await getPosts();
  console.log(posts, "posts");

  return (
    <div>
      <Header title="Articles" tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
      <TestCRUD></TestCRUD>
    </div>
  );
}
