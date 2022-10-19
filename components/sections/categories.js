import { CatPost } from "../posts";
import Fetcher from "../../lib/fetcher";
import { Spinner, Error } from "../children";

export default function Categories() {
  const { data, isLoading, isError } = Fetcher("/api/posts/popular");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {data[0] ? <CatPost post={data[0]} /> : null}
            {data[1] ? <CatPost post={data[1]} /> : null}
            {data[2] ? <CatPost post={data[2]} /> : null}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {data[3] ? <CatPost post={data[3]} /> : null}
            {data[4] ? <CatPost post={data[4]} /> : null}
            {data[0] ? <CatPost post={data[0]} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
