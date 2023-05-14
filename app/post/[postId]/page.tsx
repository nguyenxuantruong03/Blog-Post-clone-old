import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/post";
import Link from "next/link";
import { notFound } from "next/navigation";

//SSG Static-Side-Generate (Nếu ko có dòng này nó sẽ chuyển sang SSR)
export function generateStaticParams(){
  const posts = getSortedPostsData(); //deduped!

  return posts.map((post) => ({
    postId: post.id
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
 /* const posts = getSortedPostsData();` đang gọi hàm `getSortedPostsData` từ `post`
  module để truy xuất một mảng gồm tất cả các bài đăng trên blog được sắp xếp theo ngày. Nhận xét `//deuped!` gợi ý
  rằng chức năng này cũng có thể xóa bất kỳ bài đăng trùng lặp nào. */
  const posts = getSortedPostsData(); //deduped!
 /* const { postId } = params;` đang phá hủy đối tượng `params` và gán giá trị của
  `postId` thành một biến mới có cùng tên. Điều này cho phép truy cập dễ dàng hơn vào giá trị `postId`
  sau này trong mã. */
  const { postId } = params;
  /* This code is checking if the `postId` passed as a parameter exists in the `posts` array. If it
  doesn't exist, it returns a 404 error page using the `notFound()` function from the
  `next/navigation` module. */
  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }
  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate text-white dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0 text-white">{title}</h1>
      <p className=" text-white mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/" className="text-white">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
