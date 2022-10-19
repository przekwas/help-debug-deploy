import Image from "next/image";
import Link from "next/link";
import Fetcher from "../../lib/fetcher";
import { Spinner, Error } from "../children";

// This function adds a little variety to the articles by matching them with one of
// five fictional authors. Could tie authors to specific posts, but it's a little
// beyond the scope of this project.
export default function Author() {
  const authorId = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  const { data, isLoading, isError } = Fetcher(`/api/authors/${authorId}`);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div className="author flex py-5">
      <Image
        alt="Author Image"
        src={data.image}
        className="rounded-full"
        width={60}
        height={60}
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <a className="text-md font-bold text-gray-800 hover:text-gray-600">
            {data.name}
          </a>
        </Link>
        <span className="text-sm text-gray-500">{data.role}</span>
      </div>
    </div>
  );
}
