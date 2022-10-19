import { Swiper, SwiperSlide } from "swiper/react";
import { PopularPost } from "../posts";
import Fetcher from "../../lib/fetcher";
import { Spinner, Error } from "../children";

export default function MostPopular() {
  const { data, isLoading, isError } = Fetcher("/api/posts/popular");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* Swiper */}
      <Swiper breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 30 } }}>
        {data.map((post, index) => {
          return (
            <SwiperSlide key={index}>
              <PopularPost post={post} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
