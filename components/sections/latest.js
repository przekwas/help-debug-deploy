import { LatestPost } from "../posts";
import Fetcher from "../../lib/fetcher";
import { Spinner, Error } from "../children";

export default function Latest() {
  const { data, isLoading, isError } = Fetcher("/api/posts/");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((post, index) => {
          return <LatestPost post={post} key={index} />;
        })}
      </div>
    </section>
  );
}
