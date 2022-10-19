import Link from "next/link";
import Image from "next/image";
import { Author } from "../children";
import Fetcher from "../../lib/fetcher";
import { Spinner, Error } from "../children";

export default function RelatedPost() {
  const postId = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  const { data, isLoading, isError } = Fetcher(`/api/posts/${postId}`);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${data.id}`}>
          <a>
            <Image
              src={data.image}
              className="rounded"
              width={300}
              height={200}
              alt="Author Image"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={`/posts/${data.id}`}>
            <a className="text-orange-600 hover:text-orange-800">
              {data.category}
            </a>
          </Link>
          <Link href={`/posts/${data.id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              {" "}
              - {data.published}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${data.id}`}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {data.title}
            </a>
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
