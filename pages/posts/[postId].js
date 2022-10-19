import { PageContainer } from "../../containers";
import getPost from "../../lib/helper";
import Fetcher from "../../lib/fetcher";
import { Error, Spinner } from "../../components/children";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import Head from "next/head";

// We use the SWRConfig to cache the data
export default function Page({ fallback }) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = Fetcher(`/api/posts/${postId}`);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <>
      <Head>
        <title>Design</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Article {...data} />
      </SWRConfig>
    </>
  );
}

function Article({ title, subtitle, image, content }) {
  return (
    <PageContainer
      title={title}
      description={subtitle}
      content={content}
      image={image}
    />
  );
}

// Get static props is used to grab a specific post from the api on request.
export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId);

  return {
    props: {
      fallback: {
        "/api/posts": posts,
      },
    },
  };
}

// Get static paths is necessary for paths with queries, so that Next.js
// knows what it's going to render when that query is called.
// i.e. blog/1 lets Next.js to grab the first one.
export async function getStaticPaths() {
  const posts = await getPost();

  const paths = posts.map((post) => {
    return {
      params: {
        postId: post.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
