import { RelatedPost } from "../posts";

export default function Related() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
        <RelatedPost />
      </div>
    </section>
  );
}
