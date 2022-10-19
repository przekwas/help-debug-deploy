import { TrendingPost } from "../posts";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Fetcher from "../../lib/fetcher";
import { Spinner, Error } from "../children";

import "swiper/css";

export default function Trending() {
  const { data, isLoading, isError } = Fetcher("/api/posts/trending");

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  SwiperCore.use(Autoplay);
  const bg = {
    background: "url(/assets/images/banner.png) no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          {data.map((post, index) => (
            <SwiperSlide key={index}>
              <TrendingPost post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
