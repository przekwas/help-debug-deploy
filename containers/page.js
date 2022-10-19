import Format from "../layout/layout";
import { Author, Related } from "../components/children";
import Image from "next/image";

export default function PageContainer({ title, description, content, image }) {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{title}</h1>

          <p className="text-gray-500 text-xl text-center">{description}</p>

          <div className="py-10">
            <Image src={image} width={900} height={600} />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>{content}</p>
          </div>
        </div>
        <Related />
      </section>
    </Format>
  );
}
