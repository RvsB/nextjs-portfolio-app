import { getAllPosts } from "@/lib/cms";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div>
      {posts.map((post) => {
        return (<>
          <Link href={`/blog/${post.slug}`}>
            <div>
              <h1>{post.title}</h1>
            </div>
          </Link>
        </>)
      })}
    </div>
  )
}