import { useRouter } from 'next/router';

function BlogPostsPage() {
  const router = useRouter();

  //http://localhost:3000/blog/2020/12
  //{"slug": ["2020","12"]}
  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
